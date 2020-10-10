import * as TypeGraphQL from "type-graphql";
import { FindOneIngredientArgs } from "./args/FindOneIngredientArgs";
import { Ingredient } from "../../../models/Ingredient";

@TypeGraphQL.Resolver(_of => Ingredient)
export class FindOneIngredientResolver {
  @TypeGraphQL.Query(_returns => Ingredient, {
    nullable: true,
    description: undefined
  })
  async ingredient(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneIngredientArgs): Promise<Ingredient | null> {
    return ctx.prisma.ingredient.findOne(args);
  }
}
