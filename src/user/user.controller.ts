import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  getUser(@Param() id) {
    return this.userService.getUser(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  getUsers() {
    return this.userService.getUsers();
  }
}
