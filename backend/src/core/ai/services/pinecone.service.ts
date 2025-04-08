import { Injectable } from '@nestjs/common';
import { Pinecone } from '@pinecone-database/pinecone';
import { OpenAIEmbeddings } from '@langchain/openai';

@Injectable()
export class PineconeService {
    private pinecone: Pinecone;
    private embedding: OpenAIEmbeddings;
  
    constructor() {
        this.pinecone = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
        this.embedding = new OpenAIEmbeddings({
          modelName: "text-embedding-ada-002",
          openAIApiKey: process.env.OPENAI_API_KEY,
        });

    }

    async generateEmbedding(textsToEmbed: string[]) {
        return await this.embedding.embedDocuments(textsToEmbed);
    }

    async createVectors(vectors) {
        const index = this.pinecone.Index("exclusive-index");
        await index.upsert(vectors);
    }

}
