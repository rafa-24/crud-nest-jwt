import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { Test } from '@nestjs/testing';

describe('UsersController', () => {
  let userController: UsersController;
  let userService: UsersService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    userService = moduleRef.get<UsersService>(UsersService);
    userController = moduleRef.get<UsersController>(UsersController);
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      const result = ['diana', 'karina', 'cristina'];
      jest.spyOn(userService, 'findAll').mockImplementation(() => result);

      expect(await userController.findAll()).toBe(result);
    });

    describe('create', () => {
      it('deberia retornar un objeto de usuario', async () => {
        jest
          .spyOn(userService, 'create')
          .mockImplementation(() => 'this action returns all users');
        expect(await userController.create({})).toBe(
          'this action returns all users',
        );
      });
    });
  });
});
