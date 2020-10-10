import * as TypeGraphQL from "type-graphql";
import { UpdateManyRecipeArgs } from "./args/UpdateManyRecipeArgs";
import { Recipe } from "../../../models/Recipe";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Recipe)
export class UpdateManyRecipeResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyRecipe(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyRecipeArgs): Promise<BatchPayload> {
    return ctx.prisma.recipe.updateMany(args);
  }
}
