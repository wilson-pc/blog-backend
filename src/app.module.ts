import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaClient } from '@prisma/client';
import { TypeGraphQLModule } from 'typegraphql-nestjs';
import { resolve } from 'path';
import { Context } from './context.interface';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { authChecker } from './auth/auth-checker';
import { CategoryModule } from './category/category.module';
import { CommentModule } from './comment/comment.module';
import { MulterModule } from '@nestjs/platform-express/multer/multer.module';
import {
  ImagenCrudResolver,
  IngredientCrudResolver,
  IngredientRelationsResolver,
  RecipeCrudResolver,
  RecipeRelationsResolver,
  StepCrudResolver,
  StepRelationsResolver,
  Video2CrudResolver,
  Video2RelationsResolver,
  VideoCrudResolver,
} from './prisma/generated';

const prisma = new PrismaClient();

@Module({
  imports: [
    TypeGraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      path: '/graphql2',
      emitSchemaFile: resolve(__dirname, '../generated-schema.graphql'),
      validate: true,
      authChecker: authChecker,
      introspection: true,
      playground: true,
      bodyParserConfig: {
        limit: '100mb',
      },
      dateScalarMode: 'timestamp',
      context: ({ req }): Context => ({ prisma: prisma, req: req }),
    }),

    AuthModule,
    UserModule,
    PostModule,
    CategoryModule,
    CommentModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    VideoCrudResolver,
    Video2CrudResolver,
    ImagenCrudResolver,
    Video2RelationsResolver,
    RecipeCrudResolver,
    RecipeRelationsResolver,
    IngredientCrudResolver,
    IngredientRelationsResolver,
    StepCrudResolver,
    StepRelationsResolver,
  ],
})
export class AppModule {}
