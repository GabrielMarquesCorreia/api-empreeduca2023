import { IsDateString, IsEmail, IsIdentityCard, IsOptional, IsPhoneNumber, IsString, MaxLength, MinLength, isIdentityCard } from "class-validator";

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

    @IsString()
    cpf: string;

    @IsPhoneNumber()
    cellphone: string; 

    @IsString()
    address: string;

    @IsString()
    cep: string;

}

