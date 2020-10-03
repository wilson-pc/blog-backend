import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateVideoArgs } from "./args/AggregateVideoArgs";
import { Video } from "../../../models/Video";
import { AggregateVideo } from "../../outputs/AggregateVideo";

@TypeGraphQL.Resolver(_of => Video)
export class AggregateVideoResolver {
  @TypeGraphQL.Query(_returns => AggregateVideo, {
    nullable: false,
    description: undefined
  })
  async aggregateVideo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateVideoArgs): Promise<AggregateVideo> {
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

    return ctx.prisma.video.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
