import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient, User } from '@prisma/client';
import { AuthInput } from './inputs/auth-input';
import { compareSync } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { AuthPayload } from './types/auth-payload';

@Injectable()
export class AuthService {
  async validate(prisma: PrismaClient, login: AuthInput) {
    let users = await prisma.user.findMany({
      where: {
        email: { equals: login.email },
      },
    });
    let user = users[0];
    if (user) {
      if (compareSync(login.password, user.password)) {
        return this.login(user);
      } else {
        throw new HttpException(
          'Usuario o contraseña incorrecta',
          HttpStatus.UNAUTHORIZED,
        );
      }
    } else {
      throw new HttpException(
        'Usuario o contraseña incorrecta',
        HttpStatus.UNAUTHORIZED,
      );
    }
  }

  login(user: User) {
    let auth: AuthPayload = {
      token: sign({ userId: user.id }, 'secret-password', { expiresIn: '24h' }),
      user: user,
    };
    return auth;
  }
}
