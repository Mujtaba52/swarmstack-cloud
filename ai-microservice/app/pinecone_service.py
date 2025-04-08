from langchain_openai import OpenAIEmbeddings
from pinecone import Pinecone
from app import config

class PineconeService:
    def __init__(self):
        self.pinecone = Pinecone(api_key=config.PINECONE_API_KEY)
        self.embedding = OpenAIEmbeddings(
            model="text-embedding-ada-002",
            openai_api_key=config.OPENAI_API_KEY
        )

    def get_embedding(self, query: str):
        return self.embedding.embed_query(query)

    def query_index(self, vector):
        index = self.pinecone.Index("exclusive-index")
        results = index.query(
            vector=vector,
            top_k=3,
            include_metadata=True
        )
        return results
