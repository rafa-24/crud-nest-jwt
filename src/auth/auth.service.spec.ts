import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { User, userSchema } from './schema/user.model';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtService, JwtModule } from '@nestjs/jwt';
import { hash } from 'bcrypt';
import { RegisterDto } from './dto/register.dto';

describe('userService', () => {
  let service: AuthService;
  let registerDto: RegisterDto;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [
        MongooseModule.forRoot(
          'mongodb+srv://rafaprieto063:shirley1119@cluster0.zmhcpss.mongodb.net/',
        ),
        JwtModule,
        MongooseModule.forFeature([{ name: User.name, schema: userSchema }]),
      ],
      providers: [AuthService, JwtService],
    }).compile();

    service = moduleRef.get<AuthService>(AuthService);
  });

  it('deberia crear un nuevo usuario en la base de datos', async () => {
    const user = await service.registerUser({
      name: 'katiuzca',
      email: 'kati@gmail.com',
      password: await hash('032456', 10),
    });
    expect(user).toBeDefined();
    expect(user.id).toBeDefined();
    expect(user.name).toEqual('katiuzca');
    expect(user.email).toEqual('kati@gmail.com');
  });
});
