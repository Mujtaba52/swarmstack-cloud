import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { AiService } from './services/ai.service';
import { CreateAiDto } from './dto/create-ai.dto';
import { UpdateAiDto } from './dto/update-ai.dto';
import { ChatDto } from './dto/ai-chat.dto';

@Controller('ai')
export class AiController {
  constructor(private readonly aiService: AiService) {}


  @Get('chat')
  async aiChat(@Query() chatDto: ChatDto) {
      const results = await this.aiService.aiChat(chatDto.query);
      return { results };
    }

}
