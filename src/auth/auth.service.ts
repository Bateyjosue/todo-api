import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async getUser(id: { id: string }) {
    try {
      const userInfo = await this.prisma.user.findUnique({
        where: {
          id: Number(id.id),
        },
      });

      return {
        id: userInfo.id,
        email: userInfo.email,
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        createdAt: userInfo.createdAt,
        updatedAt: userInfo.updatedAt,
      };
    } catch (err) {
      throw new ForbiddenException('No user found');
    }
  }

  async login(dto: AuthDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (!user) throw new ForbiddenException('Credentials incorrect');

    const pwMatches = await argon.verify(user.hash, dto.password);

    if (!pwMatches) throw new ForbiddenException('Credentials incorrect');

    const token = await this.signToken(user.id, user.email);

    return {
      status: 200,
      message: 'login successful',
      token_access: token,
    };
  }

  async signup(dto: AuthDto) {
    // hash the password using the argo2
    const hash = await argon.hash(dto.password);

    try {
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          hash,
        },
      });

      // const token = await this.signToken(user.id, user.email);

      return {
        status: 201,
        message: 'sign up successful',
        created: user.createdAt,
      };
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Email taken');
        }
        throw error;
      }
    }
  }

  signToken(userId: number, email: string): Promise<string> {
    const payload = {
      sub: userId,
      email,
    };

    const secret = this.config.get('JWT_SECRET');

    return this.jwt.signAsync(payload, {
      expiresIn: '15m',
      secret,
    });
  }
}
