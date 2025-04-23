import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  SerializeOptions,
  UseGuards,
  Req,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";
import { AuthGuard } from "src/common/guards/auth.guard";

@SerializeOptions({
  excludePrefixes: ["_"],
})
@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // Protected
  @UseGuards(AuthGuard)
  @Get("/me")
  getMe(@Req() req: any) {
    const user = req.user;
    return {
      token: req.headers.authorization,
      email: user.email,
    };
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  async findAll(): Promise<User[]> {
    const users = await this.usersService.findAll();
    return users;
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.usersService.remove(+id);
  }
}
