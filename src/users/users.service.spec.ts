import { Test, TestingModule } from '@nestjs/testing';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UsersRepository } from './users.repository';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;
  let usersRepository: Partial<UsersRepository>;
  const expected: User = {
    id: 1,
    name: 'test',
    email: 'teste@gmail.com',
    active: true,
    password: '123456',
  };

  const userDTO: CreateUserDto = {
    name: 'teste',
    email: 'teste@@gmail.com',
    password: '123456',
  };

  usersRepository = {
    createUser: jest.fn().mockResolvedValue(expected), // fornecer um método createUser falso que retorna uma promessa resolvida com o usuário criado
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: UsersRepository,
          useValue: usersRepository,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  describe('create', () => {
    it('should create an user', async () => {
    
      const result = await service.create(userDTO);
      
      expect(result).toEqual(expected);
      expect(usersRepository.createUser).toHaveBeenCalledWith(userDTO);
    });
  })
});
