import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  login() {
    return {
      status: 201,
      message: 'sign up successfully',
    };
  }

  signup() {
    return {
      status: 201,
      message: 'sign in successfully',
    };
  }
}
