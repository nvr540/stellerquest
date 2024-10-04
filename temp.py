import requests

# NASA Image and Video Library API endpoint
url = 'https://images-api.nasa.gov/search'

# Parameters for the refined search
params = {
    'q': 'exoplanet',          # Search query for exoplanets
    'media_type': 'image',      # Filter for images
    'title': 'exoplanet',       # Ensure 'exoplanet' is in the title
    'description': 'exoplanet', # Ensure 'exoplanet' is in the description
    'keywords': 'exoplanet'     # Use exoplanet as a keyword filter
}

# Send the request to the API
response = requests.get(url, params=params)

# Parse the JSON response
data = response.json()

# Extract image links from the response
if 'collection' in data and 'items' in data['collection']:
    for item in data['collection']['items']:
        if 'links' in item:
            for link in item['links']:
                print(f"Image URL: {link['href']}")
else:
    print("No images found.")
