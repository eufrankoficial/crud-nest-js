import { Test, TestingModule, TestingModuleBuilder } from '@nestjs/testing';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;
  let userService: UsersService;

  const expected: User = {
    id: 1,
    name: 'test',
    email: 'teste@gmail.com',
    active: true,
    password: '123456',
  };

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: {
            create: jest.fn(() => Promise.resolve(expected))
          }
        }
      ],
    }).compile();

    controller = moduleRef.get<UsersController>(UsersController);
    userService = moduleRef.get<UsersService>(UsersService);
  });

  describe('createUser', () => {
    it('should return an User', async () => {
  
      const userDTO: CreateUserDto = {
        name: 'teste',
        email: 'teste@@gmail.com',
        password: '123456',
      };

      const createdUser = await controller.create(userDTO);
      expect(createdUser).toEqual(expected)
      expect(userService.create).toHaveBeenCalledWith(userDTO);
    });
  });
});
