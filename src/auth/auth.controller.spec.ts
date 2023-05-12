import { Test } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule, Schema } from '@nestjs/mongoose';
import { User, userSchema } from './schema/user.model';
import { JwtModule } from '@nestjs/jwt';
import { hash } from 'bcrypt';

describe('AuthController', () => {
  let controller: AuthController;
  let service: AuthService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [
        MongooseModule.forRoot(
          'mongodb+srv://rafaprieto063:shirley1119@cluster0.zmhcpss.mongodb.net/',
        ),
        MongooseModule.forFeature([{ name: User.name, schema: userSchema }]),
        JwtModule,
      ],
      controllers: [AuthController],
      providers: [AuthService],
    }).compile();

    controller = module.get<AuthController>(AuthController);
    service = module.get<AuthService>(AuthService);
  });

  it('Deberia retornar usuario insertado en la base de datos', async () => {
    const user = await controller.register({
      name: 'anuel',
      email: 'brr@gmail.com',
      password: await hash('032456', 10),
    });
    expect(user).toBeDefined();
    expect(user.id).toBeDefined();
    expect(user.name).toEqual('anuel');
    expect(user.email).toEqual('brr@gmail.com');
  });
});
