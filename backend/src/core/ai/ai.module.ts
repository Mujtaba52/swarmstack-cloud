import { Module } from '@nestjs/common';
import { AiService } from './services/ai.service';
import { AiController } from './ai.controller';
import { PineconeService } from './services/pinecone.service';

@Module({
  controllers: [AiController],
  providers: [AiService, PineconeService],
  exports: [AiService, PineconeService]
})
export class AiModule {}
