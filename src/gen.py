import json
import os
import click
import glob
import datetime


@click.command()
@click.argument('path')
def main(path: str):
    print("I index json files.")
    reports = glob.glob(f'{path}/*.json')

    reports = [os.path.basename(report) for report in reports]
    times = [ts.removesuffix('.json') for ts in reports]

    dates = [datetime.datetime.strptime(ts, "%d-%m-%Y") for ts in times if is_date(ts)]
    dates.sort()

    recent = f'{dates[-1].strftime("%d-%m-%Y")}.json'
    print(f'Most recent: {recent}')
    result = {'recent': recent, 'reports': [f'{time}.json' for time in times if is_date(time)]}

    with open('reports/index.json', 'w') as file:
        file.write(json.dumps(result, indent=4))


def is_date(input: str) -> bool:
    try:
        datetime.datetime.strptime(input, "%d-%m-%Y")
    except:
        return False
    return True

if __name__ == '__main__':
    main()
