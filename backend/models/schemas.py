from typing import List
from pydantic import BaseModel

class Startup(BaseModel):
    id: int
    name: str
    sector: str
    location: str
    funding_stage: str
    description: str
    founded: str
    team_size: int

class SearchResult(BaseModel):
    startup: Startup
    relevance_score: float
    matched_fields: List[str] = []

class SearchResponse(BaseModel):
    results: List[SearchResult]
    total_results: int
    query: str

class RecentSearchesResponse(BaseModel):
    searches: List[str]
