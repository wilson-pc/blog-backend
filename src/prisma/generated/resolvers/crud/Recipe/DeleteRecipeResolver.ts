import * as TypeGraphQL from "type-graphql";
import { DeleteRecipeArgs } from "./args/DeleteRecipeArgs";
import { Recipe } from "../../../models/Recipe";

@TypeGraphQL.Resolver(_of => Recipe)
export class DeleteRecipeResolver {
  @TypeGraphQL.Mutation(_returns => Recipe, {
    nullable: true,
    description: undefined
  })
  async deleteRecipe(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteRecipeArgs): Promise<Recipe | null> {
    return ctx.prisma.recipe.delete(args);
  }
}
