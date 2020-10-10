import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateIngredientArgs } from "./args/AggregateIngredientArgs";
import { Ingredient } from "../../../models/Ingredient";
import { AggregateIngredient } from "../../outputs/AggregateIngredient";

@TypeGraphQL.Resolver(_of => Ingredient)
export class AggregateIngredientResolver {
  @TypeGraphQL.Query(_returns => AggregateIngredient, {
    nullable: false,
    description: undefined
  })
  async aggregateIngredient(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateIngredientArgs): Promise<AggregateIngredient> {
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

    return ctx.prisma.ingredient.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
