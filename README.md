# 🔍 Contextual Search Tool

A powerful startup search application that enables intelligent searching across multiple fields using TF-IDF ranking for relevance scoring.

## ✨ Features

- **Smart Search**: Search across startup names, sectors, and descriptions
- **Relevance Ranking**: TF-IDF-based scoring ensures the most relevant results appear first
- **Sector Filtering**: Filter results by specific industry sectors
- **Search History**: Track and view your last 5 searches
- **Real-time Results**: Dynamic search results with instant feedback

## 📊 Dataset

The application includes a curated dataset of **40 startups** with comprehensive information:

| Field | Description |
|-------|-------------|
| `id` | Unique identifier |
| `name` | Startup name |
| `sector` | Industry sector |
| `location` | Geographic location |
| `funding_stage` | Current funding stage (Seed, Series A, etc.) |
| `description` | Detailed startup description |
| `founded` | Year founded |
| `team_size` | Number of team members |

## 🏗️ Architecture

### Backend (FastAPI)

The backend provides a RESTful API with TF-IDF-based search capabilities.

**Endpoint**: `GET /search`

**Request Body**:
```json
{
  "query": "AI fitness",
  "sector": "Fitness"  // Optional
}
```

**Response Example**:
```json
{
  "results": [
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
      "relevance_score": 0.643,
      "matched_fields": ["name", "description"]
    }
  ]
}
```

### Frontend (React)

Modern, responsive interface built with React  featuring:

- Intuitive search input with real-time suggestions
- Detailed result cards with startup information
- Sector filter dropdown
- Search history sidebar
- Clean, accessible design

## 🚀 Getting Started

### Prerequisites

- **Python** 3.8+
- **Node.js** 16+
- **npm** or **yarn**

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   
   # On macOS/Linux:
   source venv/bin/activate
   
   # On Windows:
   venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Start the FastAPI server:
   ```bash
   uvicorn main:app --reload
   ```

   The API will be available at `http://localhost:8000`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`

## 🛠️ Technology Stack

### Backend
- **FastAPI**: High-performance web framework
- **scikit-learn**: TF-IDF implementation
- **Pydantic**: Data validation
- **uvicorn**: ASGI server

### Frontend
- **Next.js**: React framework
- **React**: UI library
- **Tailwind CSS**: Styling (if applicable)
- **Axios**: HTTP client

## 💡 How It Works

1. **Data Indexing**: Startup data is indexed using TF-IDF (Term Frequency-Inverse Document Frequency)
2. **Query Processing**: User queries are vectorized using the same TF-IDF model
3. **Relevance Scoring**: Cosine similarity calculates relevance scores between query and startups
4. **Result Ranking**: Results are sorted by relevance score and returned to the frontend
5. **History Tracking**: The last 5 searches are stored locally for quick access

## 📝 API Documentation

Once the backend is running, visit:
- **Swagger UI**: `http://localhost:8000/docs`
- **ReDoc**: `http://localhost:8000/redoc`

## 🎯 Future Enhancements

- [ ] Advanced filters (funding stage, location, team size)
- [ ] Fuzzy search for typo tolerance
- [ ] Autocomplete suggestions
- [ ] Export search results
- [ ] User authentication and saved searches
- [ ] Analytics dashboard

