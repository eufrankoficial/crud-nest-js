import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {

  constructor(
    private usersRepository: UsersRepository,
  ) {}

  async create(createUserDto: CreateUserDto) {
    return this.usersRepository.createUser(createUserDto)
  }

  findAll() {
    return this.usersRepository.find();
  }

  async findBy(condition: any) {
    return await this.usersRepository.find({
      where: condition
    });
  }

  findOne(id: number) {
    return this.usersRepository.findBy([
      {id}
    ]);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
