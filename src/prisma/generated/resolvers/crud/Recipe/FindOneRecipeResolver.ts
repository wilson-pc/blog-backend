import * as TypeGraphQL from "type-graphql";
import { FindOneRecipeArgs } from "./args/FindOneRecipeArgs";
import { Recipe } from "../../../models/Recipe";

@TypeGraphQL.Resolver(_of => Recipe)
export class FindOneRecipeResolver {
  @TypeGraphQL.Query(_returns => Recipe, {
    nullable: true,
    description: undefined
  })
  async recipe(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneRecipeArgs): Promise<Recipe | null> {
    return ctx.prisma.recipe.findOne(args);
  }
}
