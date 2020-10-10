import * as TypeGraphQL from "type-graphql";
import { UpdateIngredientArgs } from "./args/UpdateIngredientArgs";
import { Ingredient } from "../../../models/Ingredient";

@TypeGraphQL.Resolver(_of => Ingredient)
export class UpdateIngredientResolver {
  @TypeGraphQL.Mutation(_returns => Ingredient, {
    nullable: true,
    description: undefined
  })
  async updateIngredient(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateIngredientArgs): Promise<Ingredient | null> {
    return ctx.prisma.ingredient.update(args);
  }
}
