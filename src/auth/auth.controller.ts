import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() registerDto: RegisterDto) {
    console.log('createAuthDto', registerDto);
    return this.authService.registerUser(registerDto);    
  }

  @Post('login')
  Login(@Body() userCredentials: LoginDto) {
    return this.authService.loginUser(userCredentials);        
  }

  
}
