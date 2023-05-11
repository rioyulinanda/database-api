import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { UsersRepository } from '../users/users.repository';
import { PrismaService } from '../prisma.service';
import { UsersService } from '../users/users.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: process.env['JWT_SECRET'],
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [AuthService, PrismaService, UsersService, UsersRepository],
  controllers: [AuthController],
})
export class AuthModule {}
