import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateVideo2Args } from "./args/AggregateVideo2Args";
import { Video2 } from "../../../models/Video2";
import { AggregateVideo2 } from "../../outputs/AggregateVideo2";

@TypeGraphQL.Resolver(_of => Video2)
export class AggregateVideo2Resolver {
  @TypeGraphQL.Query(_returns => AggregateVideo2, {
    nullable: false,
    description: undefined
  })
  async aggregateVideo2(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateVideo2Args): Promise<AggregateVideo2> {
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

    return ctx.prisma.video2.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
