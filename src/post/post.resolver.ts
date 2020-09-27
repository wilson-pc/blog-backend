import { PrismaClient } from '@prisma/client';
import { Context } from 'src/context.interface';
import {
  CreatePostArgs,
  DeletePostArgs,
  FindManyPostArgs,
  FindOnePostArgs,
  Post,
  UpdatePostArgs,
} from 'src/prisma/generated';
import * as TypeGraphQL from 'type-graphql';
import { Arg, Authorized, Resolver } from 'type-graphql';

@Resolver()
export class PostResolver {
  @TypeGraphQL.Query(_returns => Post, {
    nullable: true,
    description: undefined,
  })
  async post(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: FindOnePostArgs,
  ): Promise<Post | null> {
    return ctx.prisma.post.findOne(args);
  }

  @TypeGraphQL.Query(_returns => [Post], {
    nullable: false,
    description: undefined,
  })
  async posts(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: FindManyPostArgs,
  ): Promise<Post[]> {
    return ctx.prisma.post.findMany(args);
  }

  @Authorized()
  @TypeGraphQL.Mutation(_returns => Post, {
    nullable: false,
    description: undefined,
  })
  async createPost(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: CreatePostArgs,
  ): Promise<Post> {
    return ctx.prisma.post.create(args);
  }
  @Authorized()
  @TypeGraphQL.Mutation(_returns => Post, {
    nullable: true,
    description: undefined,
  })
  async deletePost(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: DeletePostArgs,
  ): Promise<Post | null> {
    return ctx.prisma.post.delete(args);
  }

  @Authorized()
  @TypeGraphQL.Mutation(_returns => Post, {
    nullable: true,
    description: undefined,
  })
  async updatePost(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: UpdatePostArgs,
  ): Promise<Post | null> {
    return ctx.prisma.post.update(args);
  }

  @Authorized()
  @TypeGraphQL.Mutation(_returns => Post, {
    nullable: true,
    description: undefined,
  })
  async publishPost(
    @TypeGraphQL.Ctx() { prisma }: Context,
    @Arg('id', { nullable: false }) id: string,
  ): Promise<Post | null> {
    return prisma.post.update({ where: { id: id }, data: { published: true } });
  }
}
