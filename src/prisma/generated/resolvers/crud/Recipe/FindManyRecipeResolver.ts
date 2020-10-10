import * as TypeGraphQL from "type-graphql";
import { FindManyRecipeArgs } from "./args/FindManyRecipeArgs";
import { Recipe } from "../../../models/Recipe";

@TypeGraphQL.Resolver(_of => Recipe)
export class FindManyRecipeResolver {
  @TypeGraphQL.Query(_returns => [Recipe], {
    nullable: false,
    description: undefined
  })
  async recipes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyRecipeArgs): Promise<Recipe[]> {
    return ctx.prisma.recipe.findMany(args);
  }
}
