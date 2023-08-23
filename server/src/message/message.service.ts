import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { Message, User } from '../utils/typeorm';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message) private readonly messageRepository: Repository<Message>,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) { }

  async createMessageService(data) {
    const existingRecipient = await this.userRepository.findOne({
      where: { id: data.recipientId },
    });

    if (!existingRecipient)
      throw new HttpException('Recipient does not exists', HttpStatus.CONFLICT);

    const newMessage = this.messageRepository.create(data);
    return this.messageRepository.save(newMessage);
  }

  async getMessagesService(params) {
    const messages = await this.messageRepository.find({
      where: {
        recipientId: { id: params.recipientId },
        creatorId: { id: params.creatorId }
      },
    });

    if (!messages || !messages.length)
      throw new HttpException('Messages does not exist', HttpStatus.CONFLICT);

    return messages;
  }

  async deleteMessageService(messageId) {
    const deletedMessage = await this.messageRepository.delete({ id: messageId });

    if (!deletedMessage.affected)
      throw new HttpException('Message does not exist', HttpStatus.CONFLICT);

    return deletedMessage;
  }

  async updateMessageService(messageId, data) {
    const existingMessage = await this.messageRepository.findOne({
      where: { id: messageId },
    });

    if (!existingMessage)
      throw new HttpException('Message does not exist', HttpStatus.CONFLICT);

    const updatedMessage = await this.messageRepository.update(messageId, { ...existingMessage, ...data });

    if (!updatedMessage.affected)
      throw new HttpException('Message does not update', HttpStatus.CONFLICT);

    return updatedMessage;
  }
}
