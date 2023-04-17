import { DataSource } from "typeorm"
import { User } from "../entities/user.entity"
import { UsersRepository } from "../users.repository";

export const usersProviders = [
  {
    provide: UsersRepository,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: ['DATA_SOURCE'],
  }
];