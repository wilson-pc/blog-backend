import { Args, Resolver } from 'type-graphql';
import * as TypeGraphQL from 'type-graphql';
import {
  DeleteUserArgs,
  FindManyUserArgs,
  FindOneUserArgs,
  UpdateUserArgs,
  User,
} from 'src/prisma/generated';
import { CreateUserArgs } from './args/create-user-args';
import { isEmail } from 'class-validator';
import { HttpException, HttpStatus } from '@nestjs/common';

@Resolver()
export class UserResolver {
  @TypeGraphQL.Query(_returns => User, {
    nullable: true,
    description: undefined,
  })
  async user(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: FindOneUserArgs,
  ): Promise<User | null> {
    return ctx.prisma.user.findOne(args);
  }

  @TypeGraphQL.Query(_returns => [User], {
    nullable: false,
    description: undefined,
  })
  async users(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: FindManyUserArgs,
  ): Promise<User[]> {
    return ctx.prisma.user.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => User, {
    nullable: false,
    description: undefined,
  })
  async createUser(
    @TypeGraphQL.Ctx() ctx: any,
    @Args({ validate: true }) args: CreateUserArgs,
  ): Promise<User> {
    if (isEmail(args.data.email)) {
      return ctx.prisma.user.create(args);
    } else {
      throw new HttpException('Email no valido', HttpStatus.BAD_REQUEST);
    }
  }

  @TypeGraphQL.Mutation(_returns => User, {
    nullable: true,
    description: undefined,
  })
  async deleteUser(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: DeleteUserArgs,
  ): Promise<User | null> {
    return ctx.prisma.user.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => User, {
    nullable: true,
    description: undefined,
  })
  async updateUser(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: UpdateUserArgs,
  ): Promise<User | null> {
    return ctx.prisma.user.update(args);
  }
}
