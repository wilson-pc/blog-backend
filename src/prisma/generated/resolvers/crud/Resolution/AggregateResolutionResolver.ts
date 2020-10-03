import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateResolutionArgs } from "./args/AggregateResolutionArgs";
import { Resolution } from "../../../models/Resolution";
import { AggregateResolution } from "../../outputs/AggregateResolution";

@TypeGraphQL.Resolver(_of => Resolution)
export class AggregateResolutionResolver {
  @TypeGraphQL.Query(_returns => AggregateResolution, {
    nullable: false,
    description: undefined
  })
  async aggregateResolution(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateResolutionArgs): Promise<AggregateResolution> {
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

    return ctx.prisma.resolution.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
