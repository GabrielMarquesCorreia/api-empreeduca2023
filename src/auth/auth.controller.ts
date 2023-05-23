import { Body, Controller, Post } from "@nestjs/common";
import { UserService } from "src/users/users.service";
import { AuthLoginDTO } from "./dto/auth.login";
import { AuthRegisterDTO } from "./dto/auth.register";
import { AuthForgetDTO } from "./dto/auth.forget.dto";
import { AughResetDTO } from "./dto/auth.reset.dto";

@Controller('auth')
export class AuthController {
    constructor(private readonly userService: UserService) {}

    @Post('login')
    async login(@Body() body: AuthLoginDTO) {}

    @Post('register')
    async register(@Body() body: AuthRegisterDTO) {

        return this.userService

    }

    @Post('forget')
    async forget(@Body() body: AuthForgetDTO) {}

    @Post('forget')
    async reset(@Body() body: AughResetDTO) {}
}