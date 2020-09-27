import { Module } from '@nestjs/common';
import { UserRelationsResolver } from 'src/prisma/generated';
import { UserResolver } from './user.resolver';

@Module({
  providers: [UserResolver, UserRelationsResolver],
})
export class UserModule {}
