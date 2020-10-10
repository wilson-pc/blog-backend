import * as TypeGraphQL from "type-graphql";
import { Ingredient } from "../../../models/Ingredient";
import { Recipe } from "../../../models/Recipe";
import { Video } from "../../../models/Video";
import { RecipeIngredientsArgs } from "./args/RecipeIngredientsArgs";

@TypeGraphQL.Resolver(_of => Recipe)
export class RecipeRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Video, {
    nullable: true,
    description: undefined,
  })
  async video(@TypeGraphQL.Root() recipe: Recipe, @TypeGraphQL.Ctx() ctx: any): Promise<Video | null> {
    return ctx.prisma.recipe.findOne({
      where: {
        id: recipe.id,
      },
    }).video({});
  }

  @TypeGraphQL.FieldResolver(_type => [Ingredient], {
    nullable: true,
    description: undefined,
  })
  async ingredients(@TypeGraphQL.Root() recipe: Recipe, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: RecipeIngredientsArgs): Promise<Ingredient[] | null> {
    return ctx.prisma.recipe.findOne({
      where: {
        id: recipe.id,
      },
    }).ingredients(args);
  }
}
