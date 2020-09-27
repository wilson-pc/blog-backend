import * as TypeGraphQL from 'type-graphql';
import { Arg, Authorized, Resolver } from 'type-graphql';
import {
  Category,
  CreateCategoryArgs,
  DeleteCategoryArgs,
  FindManyCategoryArgs,
  FindOneCategoryArgs,
} from 'src/prisma/generated';

@Resolver()
export class CategoryResolver {
  @TypeGraphQL.Query(_returns => Category, {
    nullable: true,
    description: undefined,
  })
  async category(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: FindOneCategoryArgs,
  ): Promise<Category | null> {
    return ctx.prisma.category.findOne(args);
  }

  @Authorized()
  @TypeGraphQL.Query(_returns => [Category], {
    nullable: false,
    description: undefined,
  })
  async categories(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: FindManyCategoryArgs,
  ): Promise<Category[]> {
    return ctx.prisma.category.findMany(args);
  }
  @Authorized()
  @TypeGraphQL.Mutation(_returns => Category, {
    nullable: false,
    description: undefined,
  })
  async createCategory(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: CreateCategoryArgs,
  ): Promise<Category> {
    return ctx.prisma.category.create(args);
  }

  @Authorized()
  @TypeGraphQL.Mutation(_returns => Category, {
    nullable: true,
    description: undefined,
  })
  async deleteCategory(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: DeleteCategoryArgs,
  ): Promise<Category | null> {
    return ctx.prisma.category.delete(args);
  }
}
