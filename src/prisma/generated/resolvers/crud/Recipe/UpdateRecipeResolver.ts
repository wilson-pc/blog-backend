import * as TypeGraphQL from "type-graphql";
import { UpdateRecipeArgs } from "./args/UpdateRecipeArgs";
import { Recipe } from "../../../models/Recipe";

@TypeGraphQL.Resolver(_of => Recipe)
export class UpdateRecipeResolver {
  @TypeGraphQL.Mutation(_returns => Recipe, {
    nullable: true,
    description: undefined
  })
  async updateRecipe(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateRecipeArgs): Promise<Recipe | null> {
    return ctx.prisma.recipe.update(args);
  }
}
