import * as TypeGraphQL from "type-graphql";
import { UpsertRecipeArgs } from "./args/UpsertRecipeArgs";
import { Recipe } from "../../../models/Recipe";

@TypeGraphQL.Resolver(_of => Recipe)
export class UpsertRecipeResolver {
  @TypeGraphQL.Mutation(_returns => Recipe, {
    nullable: false,
    description: undefined
  })
  async upsertRecipe(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertRecipeArgs): Promise<Recipe> {
    return ctx.prisma.recipe.upsert(args);
  }
}
