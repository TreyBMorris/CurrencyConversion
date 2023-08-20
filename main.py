import requests
import json

# Where USD is the base currency you want to use
url = 'https://v6.exchangerate-api.com/v6/27f5b0f6503e1523c08c00b6/latest/USD'

# Making our request
response = requests.get(url)
data = response.json()

# Your JSON object
print(data)

with open("main.json", "w") as outfile:
    json.dump(data, outfile)
