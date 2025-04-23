import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { UserController } from "./user.controller";
import { JwtModule } from "@nestjs/jwt";
@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET || "your-secret-key",
      signOptions: { expiresIn: "1d" },
    }),
  ],
  controllers: [UsersController, UserController],
  providers: [UsersService],
})
export class UsersModule {}
