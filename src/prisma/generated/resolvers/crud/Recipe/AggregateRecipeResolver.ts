import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateRecipeArgs } from "./args/AggregateRecipeArgs";
import { Recipe } from "../../../models/Recipe";
import { AggregateRecipe } from "../../outputs/AggregateRecipe";

@TypeGraphQL.Resolver(_of => Recipe)
export class AggregateRecipeResolver {
  @TypeGraphQL.Query(_returns => AggregateRecipe, {
    nullable: false,
    description: undefined
  })
  async aggregateRecipe(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateRecipeArgs): Promise<AggregateRecipe> {
    function transformFields(fields: Record<string, any>): Record<string, any> {
      return Object.fromEntries(
        Object.entries(fields)
          .filter(([key, value]) => !key.startsWith("_"))
          .map<[string, any]>(([key, value]) => {
            if (Object.keys(value).length === 0) {
              return [key, true];
            }
            return [key, transformFields(value)];
          }),
      );
    }

    return ctx.prisma.recipe.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
