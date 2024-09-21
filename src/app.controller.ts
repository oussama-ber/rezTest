import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { LoginDto } from './DTOs/inputAuth.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/auth')
    async login(@Body() loginDto: LoginDto): Promise<{token: string}> {
      return this.appService.login(loginDto);
    }
}
