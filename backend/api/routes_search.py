from fastapi import APIRouter, Query
from typing import Optional
from collections import deque
from core.search_engine import ContextualSearchEngine
from models.schemas import SearchResponse, RecentSearchesResponse
from core.config import data

router = APIRouter()


search_engine = ContextualSearchEngine(data)
recent_searches = deque(maxlen=5)

@router.get("/", response_model=SearchResponse)
def search_startups(query: str = Query(...), sector: Optional[str] = None, limit: int = 20):
    if query not in recent_searches:
        recent_searches.append(query)
    results = search_engine.search(query, sector_filter=sector)
    return SearchResponse(results=results[:limit], total_results=len(results), query=query)

@router.get("/recent", response_model=RecentSearchesResponse)
def get_recent_searches():
    return RecentSearchesResponse(searches=list(recent_searches))
