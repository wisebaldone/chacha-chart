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

    dates = [datetime.datetime.strptime(ts, "%d-%m-%Y") for ts in times]
    dates.sort()

    recent = f'{dates[-1].strftime("%d-%m-%Y")}.json'
    print(f'Most recent: {recent}')
    result = {'recent': recent, 'reports': reports}

    with open('reports/index.json', 'w') as file:
        file.write(json.dumps(result, indent=4))


if __name__ == '__main__':
    main()
