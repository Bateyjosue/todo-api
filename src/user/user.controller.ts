import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get(':id')
  getUser(@Param() id) {
    return this.userService.getUser(id);
  }

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }
}
