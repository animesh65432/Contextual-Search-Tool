from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from fuzzywuzzy import fuzz

class ContextualSearchEngine:
    def __init__(self, data):
        self.data = data
        self.vectorizer = TfidfVectorizer(stop_words='english', ngram_range=(1, 2))
        self._build_index()
    
    def _build_index(self):
        documents = [
            f"{s['name']} {s['sector']} {s['location']} {s['description']}".lower()
            for s in self.data
        ]
        self.tfidf_matrix = self.vectorizer.fit_transform(documents)
    
    def search(self, query, sector_filter=None, min_score=0.1):
        query_vec = self.vectorizer.transform([query.lower()])
        similarities = cosine_similarity(query_vec, self.tfidf_matrix).flatten()

        results = []
        for idx, startup in enumerate(self.data):
            if sector_filter and startup['sector'] != sector_filter:
                continue
            results.append({"startup": startup, "relevance_score": float(similarities[idx])})
        
        return sorted(results, key=lambda x: x['relevance_score'], reverse=True)
