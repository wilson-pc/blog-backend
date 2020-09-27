import { Module } from '@nestjs/common';
import { PostCrudResolver, PostRelationsResolver } from 'src/prisma/generated';
import { PostResolver } from './post.resolver';

@Module({
  providers: [PostResolver, PostCrudResolver, PostRelationsResolver],
})
export class PostModule {}
