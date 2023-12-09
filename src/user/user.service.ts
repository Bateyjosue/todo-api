import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
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

  async getUsers() {
    const users = await this.prisma.user.findMany();
    const usersNotHashed = users.map((user) => {
      return {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      };
    });
    return usersNotHashed;
  }
}
