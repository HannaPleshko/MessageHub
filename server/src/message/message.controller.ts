import { Body, Controller, Post, Get, Delete, Param, ParseIntPipe, Patch } from '@nestjs/common';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post()
  async createMessage(@Body() data) {
    return await this.messageService.createMessageService(data);
  }

  @Get(':creatorId/:recipientId')
  async getMessages(@Param('creatorId', ParseIntPipe) creatorId: number, @Param('recipientId', ParseIntPipe) recipientId: number) {
    const params = { creatorId, recipientId };
    return await this.messageService.getMessagesService(params);
  }

  @Delete(':id')
  async deleteMessage(@Param('id', ParseIntPipe) messageId: number) {
    return await this.messageService.deleteMessageService(messageId);
  }

  @Patch(':id')
  async updateMessage(@Param('id', ParseIntPipe) messageId: number, @Body() data) {
    return await this.messageService.updateMessageService(messageId, data);
  }
}
