import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { User } from '../utils/typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly authRepository: Repository<User>,
  ) {}

  async createUserService(data) {
    const existingUser = await this.authRepository.findOne({
      where: { email: data.email },
    });
    if (existingUser)
      throw new HttpException('User already exists', HttpStatus.CONFLICT);

    const newUser = this.authRepository.create(data);
    return this.authRepository.save(newUser);
  }
}
