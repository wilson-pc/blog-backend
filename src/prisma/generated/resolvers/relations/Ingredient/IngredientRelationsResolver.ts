import * as TypeGraphQL from "type-graphql";
import { Ingredient } from "../../../models/Ingredient";
import { Recipe } from "../../../models/Recipe";

@TypeGraphQL.Resolver(_of => Ingredient)
export class IngredientRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Recipe, {
    nullable: true,
    description: undefined,
  })
  async Recipe(@TypeGraphQL.Root() ingredient: Ingredient, @TypeGraphQL.Ctx() ctx: any): Promise<Recipe | null> {
    return ctx.prisma.ingredient.findOne({
      where: {
        id: ingredient.id,
      },
    }).Recipe({});
  }
}
