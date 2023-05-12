import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocuments } from '../users/schema/user.schema';
import { RegisterDto } from '../auth/dto/register.dto';
import { LoginDto } from '../auth/dto/login.dto';
import { hash, compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModule: Model<UserDocuments>,
    private jwtService: JwtService,
  ) {}

  async registerUser(userObject: RegisterDto) {
    const { password } = userObject;
    const plainToHash = await hash(password, 10);

    userObject = { ...userObject, password: plainToHash };

    return await this.userModule.create(userObject);
  }

  async loginUser(userObject: LoginDto) {
    const { email, password } = userObject;
    const findUser = await this.userModule.findOne({ email });

    if (!findUser) throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);

    const checkPassword = await compare(password, findUser.password);

    if (!checkPassword)
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);

    const payload = { id: findUser._id, name: findUser.name };

    const token = this.jwtService.sign(payload);

    const dataUser = {
      data: findUser,
      token,
    };

    return dataUser;
  }
}
