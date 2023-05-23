import { IsJWT, IsString, MinLength } from "class-validator";

export class AughResetDTO{
    
    @IsString()
    @MinLength(6)
    password:string;

    @IsJWT()
    token: string;
}