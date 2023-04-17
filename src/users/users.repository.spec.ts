import {Test, TestingModule} from '@nestjs/testing';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UsersRepository } from './users.repository';


describe('UsersRepository', () => {
  let repository: UsersRepository;
  const expected: User = {
    id: 1,
    name: 'test',
    email: 'teste@gmail.com',
    active: true,
    password: '123456',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersRepository],
    }).compile();

    repository = module.get<UsersRepository>(UsersRepository);
  });

  describe('create', () => {
    it('should create an user', async () => {
      const userDTO: CreateUserDto = {
        name: 'teste',
        email: 'teste@@gmail.com',
        password: '123456',
      };

      const spy = jest.spyOn(repository, 'createUser').mockResolvedValue(expected);
      const createdUser = await repository.createUser(userDTO);
      expect(createdUser).toEqual(expected);
      expect(spy).toHaveBeenCalledWith(userDTO);
    })
  });
});