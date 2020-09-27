import { AuthChecker } from 'type-graphql';
import { verify } from 'jsonwebtoken';
import { HttpException, HttpStatus } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Context } from 'src/context.interface';
// create auth checker function
interface Token {
  userId: string;
  iat: number;
}

export const authChecker: AuthChecker<Context> = async ({
  context: { req, prisma },
}) => {
  let Authorization = req.headers.authorization;
  if (Authorization) {
    try {
      const token = Authorization.replace('Bearer ', '');
      const verifiedToken = verify(token, 'secret-password') as Token;
      console.log(verifiedToken);
      req.body.userId = verifiedToken.userId;
      return true;
    } catch {
      throw new HttpException('Acceso restringido', HttpStatus.UNAUTHORIZED);
    }
  } else {
    return false;
  }
};
