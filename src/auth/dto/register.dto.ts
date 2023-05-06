import { IsNotEmpty } from "class-validator";
import { PartialType } from '@nestjs/swagger';
import { LoginDto } from './login.dto';
import { ApiProperty } from "@nestjs/swagger";

export class RegisterDto extends PartialType(LoginDto) {
      
      @ApiProperty()      
      @IsNotEmpty()
      name: string;
}
