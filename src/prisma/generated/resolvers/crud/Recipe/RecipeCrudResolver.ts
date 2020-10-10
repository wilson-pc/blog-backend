import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateRecipeArgs } from "./args/AggregateRecipeArgs";
import { CreateRecipeArgs } from "./args/CreateRecipeArgs";
import { DeleteManyRecipeArgs } from "./args/DeleteManyRecipeArgs";
import { DeleteRecipeArgs } from "./args/DeleteRecipeArgs";
import { FindManyRecipeArgs } from "./args/FindManyRecipeArgs";
import { FindOneRecipeArgs } from "./args/FindOneRecipeArgs";
import { UpdateManyRecipeArgs } from "./args/UpdateManyRecipeArgs";
import { UpdateRecipeArgs } from "./args/UpdateRecipeArgs";
import { UpsertRecipeArgs } from "./args/UpsertRecipeArgs";
import { Recipe } from "../../../models/Recipe";
import { AggregateRecipe } from "../../outputs/AggregateRecipe";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Recipe)
export class RecipeCrudResolver {
  @TypeGraphQL.Query(_returns => Recipe, {
    nullable: true,
    description: undefined
  })
  async recipe(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneRecipeArgs): Promise<Recipe | null> {
    return ctx.prisma.recipe.findOne(args);
  }

  @TypeGraphQL.Query(_returns => [Recipe], {
    nullable: false,
    description: undefined
  })
  async recipes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyRecipeArgs): Promise<Recipe[]> {
    return ctx.prisma.recipe.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Recipe, {
    nullable: false,
    description: undefined
  })
  async createRecipe(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateRecipeArgs): Promise<Recipe> {
    return ctx.prisma.recipe.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Recipe, {
    nullable: true,
    description: undefined
  })
  async deleteRecipe(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteRecipeArgs): Promise<Recipe | null> {
    return ctx.prisma.recipe.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Recipe, {
    nullable: true,
    description: undefined
  })
  async updateRecipe(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateRecipeArgs): Promise<Recipe | null> {
    return ctx.prisma.recipe.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyRecipe(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyRecipeArgs): Promise<BatchPayload> {
    return ctx.prisma.recipe.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyRecipe(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyRecipeArgs): Promise<BatchPayload> {
    return ctx.prisma.recipe.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Recipe, {
    nullable: false,
    description: undefined
  })
  async upsertRecipe(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertRecipeArgs): Promise<Recipe> {
    return ctx.prisma.recipe.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateRecipe, {
    nullable: false,
    description: undefined
  })
  async aggregateRecipe(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateRecipeArgs): Promise<AggregateRecipe> {
    function transformFields(fields: Record<string, any>): Record<string, any> {
      return Object.fromEntries(
        Object.entries(fields)
          .filter(([key, value]) => !key.startsWith("_"))
          .map<[string, any]>(([key, value]) => {
            if (Object.keys(value).length === 0) {
              return [key, true];
            }
            return [key, transformFields(value)];
          }),
      );
    }

    return ctx.prisma.recipe.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
