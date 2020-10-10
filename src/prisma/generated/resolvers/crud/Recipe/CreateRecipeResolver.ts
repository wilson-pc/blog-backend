import * as TypeGraphQL from "type-graphql";
import { CreateRecipeArgs } from "./args/CreateRecipeArgs";
import { Recipe } from "../../../models/Recipe";

@TypeGraphQL.Resolver(_of => Recipe)
export class CreateRecipeResolver {
  @TypeGraphQL.Mutation(_returns => Recipe, {
    nullable: false,
    description: undefined
  })
  async createRecipe(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateRecipeArgs): Promise<Recipe> {
    return ctx.prisma.recipe.create(args);
  }
}
