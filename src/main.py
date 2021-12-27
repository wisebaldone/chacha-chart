import random

import click
import subprocess
import json
import re
import time

from ansi2html import Ansi2HTMLConverter
from config import settings


def _grader_caa(metrics: any):
    key = 'CAA'
    default = {'score': -1, 'grade': 'NA'}
    score = Scorer()

    if metrics is None:
        default['log'] = ["not data to process"]
        return {key: default}

    finding = '--'
    if 'serverDefaults' in metrics:
        for item in metrics['serverDefaults']:
            if item['id'] == "DNS_CAArecord" or item['id'] == "DNS_CAArecord <cert#1>":
                finding = item['finding']
                break

    if finding == '--':
        score.set(0, "No CAA records found")
        return {key: {'score': score.score(), 'grade': score.grade(), 'log': score.log()}}

    # By having a CAA record you get a passing grade
    score.set(65, "Having a CAA record is a parsing grade")

    # You have a place for errors to be reported to.
    if 'iodef' in finding:
        score.add(10, "Have iodef entry for being alerted to issues.")

    issue = finding.count('issue=')
    wild = finding.count('issuewild=')

    # Of the remaining
    score.add(25, "Remaining score added")
    # If you have more than 6 on this domain than mark down
    if issue > 6:
        score.add(-10, "Have more than 6 CAAs on the domain")

    # if you have more than 6 and do not limit wilds to specific then mark down
    if issue > 6 and wild < 1:
        score.add(-15, "Have more than 6 CAAs and do not limit Wildcards")

    return {key: {'score': score.score(), 'grade': score.grade(), 'log': score.log()}}


def _grader_protocols(metrics: any):
    key = 'TLS'
    default = {'score': -1, 'grade': 'NA'}

    if metrics is None:
        return {key: default}

    score = Scorer()
    score.set(0, 'Start at 0')

    if 'protocols' in metrics:
        for item in metrics['protocols']:
            if item['id'] == 'SSLv2' and item['finding'] == 'not offered':
                score.add(15, "Not offering SSLv2")

            if item['id'] == 'SSLv3' and item['finding'] == 'not offered':
                score.add(15, "Not offering SSLv3")

            if item['id'] == 'TLS1' and item['finding'] == 'not offered':
                score.add(15, "Not offering TLS1")
            elif item['id'] == 'TLS1' and (item['finding'] == 'offered' or
                                           item['finding'] == 'offered with final' or
                                           item['finding'] == 'offered (deprecated)'):
                score.add(5, "Offers TLSv1, its better to not offer it")

            if item['id'] == 'TLS1_1' and item['finding'] == 'not offered':
                score.add(20, "Not offering TLSv1.1")
            elif item['id'] == 'TLS1_1' and (item['finding'] == 'offered' or
                                             item['finding'] == 'offered with final' or
                                             item['finding'] == 'offered (deprecated)'):
                score.add(10, "Offers TLSv1.1, its better to not offer it")

            if item['id'] == 'TLS1_2' and (item['finding'] == 'offered' or
                                           item['finding'] == 'offered with final'):
                score.add(10, "Offers TLSv1.2 =)")

            if item['id'] == 'TLS1_3' and (item['finding'] == 'offered' or
                                           item['finding'] == 'offered with final'):
                score.add(25, "Offers TLSv1.3 =)")

    return {key: {'score': score.score(), 'grade': score.grade(), 'log': score.log()}}


def _score_to_rating(score: int):
    if score < 0:
        return 'NA'
    if score < 50:
        return 'F'
    if score < 65:
        return 'P'
    if score < 75:
        return 'C'
    if score < 85:
        return 'D'
    return 'HD'


class Scorer:

    def __init__(self):
        self._score = 0
        self._log = []

    def add(self, score: int, log: str = ""):
        self._score += score
        symbol = '' if score < 0 else '+'
        self._log.append(f'{symbol}{score} :: {log}')

    def set(self, score: int, reason: str = ""):
        self._score = score
        self._log.append(f'{score} :: {reason}')

    def score(self):
        return self._score

    def grade(self):
        return _score_to_rating(self._score)

    def log(self):
        return self._log


class Report:

    def __init__(self):
        self._data = {'members': {}}
        self._ansi_html = Ansi2HTMLConverter()
        # ref: https://stackoverflow.com/questions/14693701/how-can-i-remove-the-ansi-escape-sequences-from-a-string-in-python
        self._ansi_escape = re.compile(r'\x1B(?:[@-Z\\-_]|\[[0-?]*[ -/]*[@-~])')
        self._graders = {}

        self.add_grader('caa', _grader_caa)
        self.add_grader('protocols', _grader_protocols)

    def add_member(self, id: str, name: str, groups=None):
        if groups is None:
            groups = []

        if id in self._data:
            return

        groups.append("All")
        self._data['members'][id] = {'name': name, 'groups': groups, 'endpoints': []}

    def add_endpoint(self, id: str, url: str, metrics: any = None, html: any = None, error=None):
        if id not in self._data['members']:
            # todo(eh): throw exception
            return

        if error is not None:
            self._data['members'][id]['endpoints'].append({
                'url': url,
                'error': self._ansi_escape.sub('', error)
            })
            return

        ratings = {}
        for grader_id in self._graders.keys():
            grader = self._graders[grader_id]
            rating = grader(metrics)
            ratings.update(rating)

        self._data['members'][id]['endpoints'].append({'url': url, 'ratings': ratings})

    def add_grader(self, key: str, grader: any):
        self._graders[key] = grader

    def report(self):
        # Add auxiliary info
        self._data['count'] = len(self._data['members'])
        for id in self._data['members'].keys():
            # Cumulative ranking for the Member, calc using a flooring method
            # todo(eh): implement below
            self._data['members'][id]['grading'] = random.choice(['HD', 'D', 'C', 'P', 'F', 'NA'])

        return json.dumps(self._data, indent=4)


def bug_fix(path: str):
    """
    Looks like testssl.sh has a small bug with json output so we will manually fix it ourselves.
    :return:
    """
    lines = []

    with open(path, 'r') as file:
        lines = file.readlines()

    if len(lines) == 0:
        return

    if "{" in lines[0]:
        return

    lines = lines[7:]

    with open(path, 'w') as file:
        file.writelines(lines)


@click.command()
def main():
    report = Report()
    members = settings.members

    timestamp = int(time.time())
    input_file = f'reports/{timestamp}-input.txt'

    with open(input_file, 'w') as file:
        for id in members.keys():
            member = members[id]
            if 'groups' not in member:
                member['groups'] = []

            print(member.name)
            report.add_member(id, member.name, member.groups)
            for i in range(len(member.endpoint)):
                endpoint = member.endpoint[i]
                endpoint_file = f'scans/{id}-{i}-{timestamp}.json'

                file.write(f'-p -S --jsonfile-pretty {endpoint_file} {endpoint.url}\n')

    result = subprocess.run(
        ['testssl', '--mode', 'parallel', '--file', input_file], capture_output=True)
    if result.returncode != 0:
        # report.add_endpoint(id, endpoint.url, error=result.stderr.decode('utf8'))
        print(result.stderr)
        exit(1)

    for id in members.keys():
        member = members[id]

        for i in range(len(member.endpoint)):
            endpoint = member.endpoint[i]
            endpoint_file = f'scans/{id}-{i}-{timestamp}.json'

            bug_fix(endpoint_file)

            try:
                with open(endpoint_file, 'r') as file:
                    metrics = json.loads(file.read())
                    report.add_endpoint(id, endpoint.url, metrics=metrics)
            except:
                report.add_endpoint(id, endpoint.url, error="Unable to process report")

    with open(f'reports/{timestamp}.json', 'w') as file:
        file.write(report.report())

    with open(f'reports/report.json', 'w') as file:
        file.write(report.report())


if __name__ == '__main__':
    main()
