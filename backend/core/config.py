import os
import json

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_PATH = os.path.join(BASE_DIR, "data.json")

with open(DATA_PATH, "r") as f:
    data = json.load(f)

