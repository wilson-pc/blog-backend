import * as TypeGraphQL from "type-graphql";
import { CreateIngredientArgs } from "./args/CreateIngredientArgs";
import { Ingredient } from "../../../models/Ingredient";

@TypeGraphQL.Resolver(_of => Ingredient)
export class CreateIngredientResolver {
  @TypeGraphQL.Mutation(_returns => Ingredient, {
    nullable: false,
    description: undefined
  })
  async createIngredient(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateIngredientArgs): Promise<Ingredient> {
    return ctx.prisma.ingredient.create(args);
  }
}
