import { Module } from '@nestjs/common';
import { CategoryRelationsResolver } from 'src/prisma/generated';
import { CategoryResolver } from './category.resolver';

@Module({
  providers: [CategoryResolver, CategoryRelationsResolver],
})
export class CategoryModule {}
