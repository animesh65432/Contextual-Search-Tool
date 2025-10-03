from fastapi import APIRouter, Query
from core.config import data

router = APIRouter()


@router.get("/")
def get_all_startups(limit: int = Query(40, ge=1, le=50)):
    return {"startups": data[:limit], "total": len(data)}

@router.get("/sectors")
def get_sectors():
    sectors = sorted(set(startup["sector"] for startup in data))
    return {"sectors": sectors}
