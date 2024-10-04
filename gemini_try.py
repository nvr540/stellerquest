import requests
import json

# API key
api_key = "AIzaSyBiZR7K7zLujkg5ypD4wo1M-4NXM0FgmIo"

# API URL
url = f'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key={api_key}'

# Data payload
data = {
    "contents": [
        {
            "parts": [
                {"text": "Hello"}
            ]
        }
    ]
}

# Set headers
headers = {
    "Content-Type": "application/json"
}

# Make the POST request to the API
response = requests.post(url, headers=headers, data=json.dumps(data))

# Check the response status and print the result
if response.status_code == 200:
    response_json = response.json()
    print("Response:", json.dumps(response_json, indent=2))
else:
    print(f"Error: {response.status_code} - {response.text}")
