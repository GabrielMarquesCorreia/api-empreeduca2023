import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { UserModule } from "src/users/users.module";
import { AuthController } from "./auth.controller";

@Module({
    imports: [
        JwtModule.register({
            secret: `&O,H$2%U_M9kRu{u"@dxGrG+pwRwQseF`
        }),
        UserModule
    ],
    controllers: [AuthController]
})
export class AuthModule {

}