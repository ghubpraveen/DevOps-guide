const python = {

    title: "Python Scripting",

    icon: "🐍",

    questions: [

        {
            question: "Write a script to check API health.",

            answer: `
import requests

url = "https://api.example.com/health"

response = requests.get(url)

if response.status_code == 200:
    print("Healthy")
else:
    print("Unhealthy")
`
        },

        {
            question: "Write a script to parse JSON data.",

            answer: `
import json

with open("data.json") as f:
    data = json.load(f)

print(data)
`
        },

        {
            question: "Write a script to count errors in a log file.",

            answer: `
count = 0

with open("app.log") as f:
    for line in f:
        if "ERROR" in line:
            count += 1

print(count)
`
        },

        {
            question: "Write a script to read a CSV file.",

            answer: `
import csv

with open("users.csv") as f:
    reader = csv.reader(f)

    for row in reader:
        print(row)
`
        },

        {
            question: "Write a script to find slow API endpoints.",

            answer: `
import pandas as pd

df = pd.read_csv("api.csv")

slow = df[df["response_time"] > 1000]

print(slow)
`
        },

        {
            question: "Write a Kubernetes health check script.",

            answer: `
import subprocess

output = subprocess.check_output(
    ["kubectl","get","pods"]
)

print(output.decode())
`
        },

        {
            question: "Write a script to send Slack alerts.",

            answer: `
import requests

webhook="WEBHOOK_URL"

requests.post(
    webhook,
    json={"text":"Deployment Failed"}
)
`
        },

        {
            question: "Write a script to check disk usage.",

            answer: `
import shutil

usage = shutil.disk_usage("/")

print(usage)
`
        },

        {
            question: "Write a script to read YAML.",

            answer: `
import yaml

with open("config.yaml") as f:
    data = yaml.safe_load(f)

print(data)
`
        },

        {
            question: "Write a script to list files in a directory.",

            answer: `
import os

for file in os.listdir("."):
    print(file)
`
        }

    ]

};

export default python;