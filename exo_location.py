import requests
url = 'https://exoplanetarchive.ipac.caltech.edu/TAP/sync'

def get_exoplanets_data(planet_names):
    exoplanets_info = []
    
    for planet_name in planet_names:
        query = f"""
        select pl_name, ra, dec from ps
        where pl_name = '{planet_name}'  -- Exoplanet name provided
        """
        params = {
            'query': query,
            'format': 'json'  # Specify that we want the data in JSON format
        }
        
        try:
            response = requests.get(url, params=params)
            
            # Check if the request was successful
            if response.status_code == 200:
                data = response.json()
                if data:
                    exoplanets_info.append(data[0])  # Add the first result to the list
        except Exception as e:
            print(f"An error occurred: {e}")
    # print(exoplanets_info)
    return exoplanets_info
if __name__ == '__main__':
    exo_info = []
    # all_planets = ['TOI-500', "Proxima Cen b"]
    # for planet in all_planets:
    #     planets = exo_info.append(get_exoplanets_data([planet])[0])
    # for info in exo_info:
    #     print(info['pl_name'])
    exo_info.append(get_exoplanets_data(['Kelt-3 b']))
    print(exo_info)