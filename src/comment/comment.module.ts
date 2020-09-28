import { Module } from '@nestjs/common';
import {
  CommentCrudResolver,
  CommentRelationsResolver,
} from 'src/prisma/generated';
import { CommentResolver } from './comment.resolver';

@Module({
  providers: [CommentResolver, CommentCrudResolver, CommentRelationsResolver],
})
export class CommentModule {}
