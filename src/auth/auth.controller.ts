import {
  Body,
  Controller,
  Get,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authservice: AuthService) {}

  @Post('signup')
  signup(@Body() Dto: AuthDto) {
    return this.authservice.signup(Dto);
  }
  @Post('signin')
  signin() {
    return this.authservice.signin();
  }

  @Get('get')
  getuser() {
    return this.authservice.getusers();
  }
}
