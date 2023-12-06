import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  login() {
    return {
      status: 201,
      statusText: 'created.',
      message: 'sign up successfully!!!',
    };
  }

  signup() {
    return {
      status: 201,
      statusText: 'created.',
      message: 'sign in successfully!!!',
    };
  }
}
