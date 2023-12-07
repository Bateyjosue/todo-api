import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { TodoModule } from './todo/todo.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TodoModule,
    AuthModule,
    UserModule,
    PrismaModule,
  ],
})
export class AppModule {}
