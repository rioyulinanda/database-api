import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    if (!user || user.password !== password) {
      throw new UnauthorizedException();
    }
    const { password: userPassword, ...result } = user;
    const payload = { email: result.email, sub: result.id };
    const accessToken = this.jwtService.sign(payload);

    return { ...result, accessToken };
  }
}
