import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { AuthGuard } from "src/common/guards/auth.guard";
import { Request } from "express";

@Controller()
export class UserController {
  // Protected route at /api/user
  @UseGuards(AuthGuard)
  @Get("user")
  getAuthenticatedUser(@Req() req: Request) {
    return {
      message: "Authenticated user data",
      user: req["user"],
    };
  }
}
