import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './DTOs/inputAuth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AppService {

  constructor(private jwtService: JwtService) {}

  getHello(): string {
    return 'Hello World!';
  }

  async login (loginDto: LoginDto): Promise<{token: string}>{
    const {email, password} = loginDto;
    const token = await this.jwtService.signAsync({ email: email, password: password });
    return { token };
  }
}
