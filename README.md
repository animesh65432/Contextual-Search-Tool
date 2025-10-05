# Contextual Search Tool

## Overview
The Contextual Search Tool allows users to search for startups and view relevant results based on a query. It demonstrates basic contextual search functionality using a small dataset of startups with fields like name, sector, location, funding stage, and description.

---

## Features
- Search across multiple fields (name, sector, description)  
- Displays search results with relevant information  
- Optional features:
  - Filter by sector
  - Show last 5 searches

---

## Dataset
- A small dataset of 40 startups is used.
- Fields include:
  - `id`
  - `name`
  - `sector`
  - `location`
  - `funding_stage`
  - `description`
  - `founded`
  - `team_size`

---

## Backend (FastAPI)
- API endpoint: `/search`
- Accepts a query string (and optional sector filter)
- Returns JSON response with relevant results
- Uses TF-IDF for ranking relevance
- Example response:
```json
{
   "startup": {
                "id": 22,
                "name": "FitnessPro AI",
                "sector": "Fitness",
                "location": "San Diego, CA",
                "funding_stage": "Seed",
                "description": "AI personal trainer app with computer vision for form correction and workout planning.",
                "founded": "2021",
                "team_size": 16
            },
            "relevance_score": 0.06431598856636131,
            "matched_fields": []
}


## Frontend (Next.js / React)

Simple search input box

Displays results with key startup information

Optional features:

Filters by sector

Last 5 searches

How to Run Locally

## Backend

cd backend

python -m venv venv

source venv/bin/activate  # On Windows: venv\Scripts\activate

pip install -r requirements.txt

uvicorn main:app --reload

Frontend

cd frontend

npm install

npm run dev


Approach

Built a small dataset of startups in JSON format

Implemented a FastAPI backend to search startups using keyword matching and TF-IDF ranking

Created a React frontend to show results dynamically

include filters and tracking last 5 searches