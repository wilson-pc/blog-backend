import * as TypeGraphQL from "type-graphql";
import { UpsertIngredientArgs } from "./args/UpsertIngredientArgs";
import { Ingredient } from "../../../models/Ingredient";

@TypeGraphQL.Resolver(_of => Ingredient)
export class UpsertIngredientResolver {
  @TypeGraphQL.Mutation(_returns => Ingredient, {
    nullable: false,
    description: undefined
  })
  async upsertIngredient(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertIngredientArgs): Promise<Ingredient> {
    return ctx.prisma.ingredient.upsert(args);
  }
}
