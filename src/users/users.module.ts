import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { UserController } from "./users.controller";
import { UserIdCheckMiddleware } from "src/middlewares/user-id-check.middleware";
import { UserService } from "./users.service";

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [UserService],
  exports: []
})
export class UserModule implements NestModule {

  configure(consumer: MiddlewareConsumer) {
    consumer.apply (UserIdCheckMiddleware).forRoutes({
      path: 'users/:id',
      method: RequestMethod.ALL
    })
  }
}