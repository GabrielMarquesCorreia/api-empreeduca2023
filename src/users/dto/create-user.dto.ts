import { IsDateString, IsEmail, IsOptional, IsString, MinLength } from "class-validator";

export class CreateUserDTO {

    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsString()
    @MinLength(6)
    password: string;

    @IsOptional()
    @IsDateString()
    birthAt: string; 


}

