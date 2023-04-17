import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./entities/user.entity";

@Injectable()
export class UsersRepository extends Repository<User>{
  async createUser(user: CreateUserDto) {
    const newUser = this.create(user);
    return await this.save(newUser);
  }

  async findUserByCondition(condition: any) {
    return this.find({
      where: condition
    });
  }
}