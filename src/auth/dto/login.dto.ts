import { IsEmail, MaxLength, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class LoginDto  {
      
      @ApiProperty()
      @IsEmail()
      email: string;

      @ApiProperty()
      @MinLength(4)
      @MaxLength(12)
      password: string;

}
