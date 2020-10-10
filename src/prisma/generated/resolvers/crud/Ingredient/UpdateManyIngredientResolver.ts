import * as TypeGraphQL from "type-graphql";
import { UpdateManyIngredientArgs } from "./args/UpdateManyIngredientArgs";
import { Ingredient } from "../../../models/Ingredient";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Ingredient)
export class UpdateManyIngredientResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyIngredient(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyIngredientArgs): Promise<BatchPayload> {
    return ctx.prisma.ingredient.updateMany(args);
  }
}
