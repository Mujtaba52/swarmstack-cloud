from .pinecone_service import PineconeService

class AiService:
    def __init__(self):
        self.pinecone_service = PineconeService()

    def ai_chat(self, user_query: str):
        vector = self.pinecone_service.get_embedding(user_query)
        search_results = self.pinecone_service.query_index(vector)

        results = []
        for match in search_results.get("matches", []):
            metadata = match.get("metadata", {})
            results.append({
                "id": match.get("id"),
                "name": metadata.get("name"),
                "price": metadata.get("price"),
                "description": metadata.get("description"),
                "thumbnailUrl": metadata.get("thumbnailUrl"),
                "createdAt": metadata.get("createdAt"),
                "score": match.get("score"),
            })

        message = (
            "It seems like the item you were looking for is available."
            if results else
            "It seems like the item you were looking for is unavailable."
        )

        return {
            "message": message,
            "items": results
        }
