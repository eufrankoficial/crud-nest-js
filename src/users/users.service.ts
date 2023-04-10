import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = this.usersRepository.create(createUserDto)
    
    await this.usersRepository.save(
      user
    );

    return this.findBy(
      {email: createUserDto.email}
    );
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
