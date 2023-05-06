import { IsNotEmpty} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateItemDto {

      @ApiProperty()
      @IsNotEmpty()
      name: string;

      @ApiProperty()
      @IsNotEmpty()    
      price: number;

      @ApiProperty()
      @IsNotEmpty()    
      description: string;
}
