import * as TypeGraphQL from "type-graphql";
import { DeleteManyRecipeArgs } from "./args/DeleteManyRecipeArgs";
import { Recipe } from "../../../models/Recipe";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Recipe)
export class DeleteManyRecipeResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyRecipe(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyRecipeArgs): Promise<BatchPayload> {
    return ctx.prisma.recipe.deleteMany(args);
  }
}
