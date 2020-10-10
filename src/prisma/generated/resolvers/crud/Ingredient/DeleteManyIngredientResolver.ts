import * as TypeGraphQL from "type-graphql";
import { DeleteManyIngredientArgs } from "./args/DeleteManyIngredientArgs";
import { Ingredient } from "../../../models/Ingredient";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Ingredient)
export class DeleteManyIngredientResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyIngredient(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyIngredientArgs): Promise<BatchPayload> {
    return ctx.prisma.ingredient.deleteMany(args);
  }
}
