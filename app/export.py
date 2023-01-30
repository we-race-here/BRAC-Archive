from django.http import HttpResponse
import csv

def download_csv(json_str, filename, type):
    writer = None
    print(len(json_str))
    map_type= {
        "road": ["Place", "TIME", "CATEGORY", "FIRST NAME", "Last NAME", "CITY"],
        "roadcup": ["Place", "POINTS", "FIRST NAME", "LAST NAME", "USAC #", "CURRENT CAT", "RACING AGE"],
        "roadcupteam": ["Place", "Total POINTS", "club #", "TEAM NAME"]
    }
    try:
        with open('temp_file.csv', 'w') as csvfile:
            writer = csv.DictWriter(csvfile, fieldnames=map_type[type])
            writer.writeheader()
            for data in json_str:
                if type == 'road':
                    map = {
                        "Place": data.get('place', '-'),
                        "TIME": data.get('time', '-'),
                        "CATEGORY": data.get('eventracegroupid', {}).get('mincategory', '-'),
                    }
                    if data.get('racerid'):
                        map['FIRST NAME'] = data.get('racerid', {}).get('firstname', '-')
                        map['Last NAME'] = data.get('racerid', {}).get('lastname', '-')
                        map['CITY'] = data.get('racerid', {}).get('city', '-')
                if type == 'roadcup':
                    map = {
                        "Place": data.get('place', '-'),
                        "POINTS": data.get('points', '-'),
                        "FIRST NAME": data.get('firstname', '-'),
                        "LAST NAME": data.get('lastname', '-'),
                        "USAC #": data.get('usac', '-'),
                        "CURRENT CAT": data.get('currentcat', '-'),
                        "RACING AGE": data.get('racingage', '-'),
                    }
                if type == 'roadcupteam':
                    map = {
                        "Place": data.get('place', '-'),
                        "Total POINTS": data.get('points', '-'),
                        "club #": data.get('clubno', '-'),
                        "TEAM NAME": data.get('team', '-'),

                    }
                try:
                    writer.writerow(
                        map
                    )
                except Exception as e:
                    print(str(e))
                    continue
    except Exception as e: print(e)
    with open('temp_file.csv', 'rb') as infile:
        response = HttpResponse(infile, content_type='text/csv')
        response['Content-Disposition'] = f'attachment; filename={filename}.csv'
        return response