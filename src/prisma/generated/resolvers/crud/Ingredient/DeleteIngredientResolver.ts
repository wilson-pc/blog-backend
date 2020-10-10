import * as TypeGraphQL from "type-graphql";
import { DeleteIngredientArgs } from "./args/DeleteIngredientArgs";
import { Ingredient } from "../../../models/Ingredient";

@TypeGraphQL.Resolver(_of => Ingredient)
export class DeleteIngredientResolver {
  @TypeGraphQL.Mutation(_returns => Ingredient, {
    nullable: true,
    description: undefined
  })
  async deleteIngredient(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteIngredientArgs): Promise<Ingredient | null> {
    return ctx.prisma.ingredient.delete(args);
  }
}
