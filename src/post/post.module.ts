import { Module } from '@nestjs/common';
import { PostCrudResolver } from 'src/prisma/generated';
import { PostResolver } from './post.resolver';

@Module({
  providers: [PostResolver, PostCrudResolver],
})
export class PostModule {}
