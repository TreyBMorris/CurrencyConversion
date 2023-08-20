import requests
import json

# Where USD is the base currency you want to use
API_CALL = 'e2f6b62536a5148392dc167a/latest/USD'
url = ('https://v6.exchangerate-api.com/v6/' + API_CALL)

# Making our request
response = requests.get(url)
data = response.json()

# Your JSON object
print(data)

with open("main.json", "w") as outfile:
    json.dump(data, outfile)
