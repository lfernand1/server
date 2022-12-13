import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { CreateUserDto } from "../dto/create-user.dto";

export class IUser extends CreateUserDto {
    
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    id: string;

    
}