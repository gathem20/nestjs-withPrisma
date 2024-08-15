import {
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { bookmark, User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';

import * as argon from 'argon2';
import { PrismaClientUnknownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  signin() {
    return {
      msg: 'you need to your email and password',
    };
  }

  async getusers(){
    return await this.prisma.user.findMany()
  }



  async signup(Dto: AuthDto) {
    // const hash = await argon.hash(Dto.password);

    const Newuser = await this.prisma.user.create(
      {
        data: Dto,
      },
    );
    return Newuser;

    // throw new ForbiddenException(
    //   'credentials taken',
    // );
  }
}
