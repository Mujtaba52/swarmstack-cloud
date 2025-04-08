import { Injectable } from '@nestjs/common';
import { CreateAiDto } from '../dto/create-ai.dto';
import { UpdateAiDto } from '../dto/update-ai.dto';
import { Pinecone } from '@pinecone-database/pinecone';
import { OpenAIEmbeddings } from '@langchain/openai';

@Injectable()
export class AiService {
  public pinecone: Pinecone;
  public embedding: OpenAIEmbeddings;

  constructor() {
    this.pinecone = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
    this.embedding = new OpenAIEmbeddings({
      modelName: "text-embedding-ada-002",
      openAIApiKey: process.env.OPENAI_API_KEY,
    });
  }
  create(createAiDto: CreateAiDto) {
    return 'This action adds a new ai';
  }

  async aiChat(userQuery: string): Promise<any> {
    const index = this.pinecone.Index("exclusive-index");
    const userVector = await this.embedding.embedQuery(userQuery);

    const searchResults = await index.query({
        vector: userVector,
        topK: 3,
        includeMetadata: true,
    });

    const results = searchResults.matches.map(match => ({
        id: match.id,
        name: match.metadata.name,
        price: match.metadata.price,
        description: match.metadata.description,
        thumbnailUrl: match.metadata.thumbnailUrl,
        createdAt: match.metadata.createdAt,
        score: match.score,
    }));

    const message = results.length > 0 
        ? "It seems like the item you were looking for is available." 
        : "It seems like the item you were looking for is unavailable.";

    return {
        message,
        items: results,
    };
}

  findOne(id: number) {
    return `This action returns a #${id} ai`;
  }

  update(id: number, updateAiDto: UpdateAiDto) {
    return `This action updates a #${id} ai`;
  }

  remove(id: number) {
    return `This action removes a #${id} ai`;
  }
}
