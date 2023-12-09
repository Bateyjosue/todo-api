import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';
import { JwtGuards } from 'src/auth/guard/jwt.guard';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  getUser(@Param() id) {
    return this.userService.getUser(id);
  }

  @UseGuards(JwtGuards)
  @Get()
  getUsers() {
    return this.userService.getUsers();
  }
}
