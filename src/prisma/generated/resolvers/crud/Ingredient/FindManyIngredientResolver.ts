import * as TypeGraphQL from "type-graphql";
import { FindManyIngredientArgs } from "./args/FindManyIngredientArgs";
import { Ingredient } from "../../../models/Ingredient";

@TypeGraphQL.Resolver(_of => Ingredient)
export class FindManyIngredientResolver {
  @TypeGraphQL.Query(_returns => [Ingredient], {
    nullable: false,
    description: undefined
  })
  async ingredients(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyIngredientArgs): Promise<Ingredient[]> {
    return ctx.prisma.ingredient.findMany(args);
  }
}
