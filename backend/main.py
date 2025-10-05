from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api import routes_search, routes_startups

app = FastAPI(title="Contextual Search API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



app.include_router(routes_search.router, prefix="/search", tags=["Search"])
app.include_router(routes_startups.router, prefix="/startups", tags=["Startups"])

@app.get("/")
def root():
    return {"message": "Contextual Search API"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)
