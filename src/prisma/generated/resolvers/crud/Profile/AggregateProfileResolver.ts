import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateProfileArgs } from "./args/AggregateProfileArgs";
import { Profile } from "../../../models/Profile";
import { AggregateProfile } from "../../outputs/AggregateProfile";

@TypeGraphQL.Resolver(_of => Profile)
export class AggregateProfileResolver {
  @TypeGraphQL.Query(_returns => AggregateProfile, {
    nullable: false,
    description: undefined
  })
  async aggregateProfile(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateProfileArgs): Promise<AggregateProfile> {
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

    return ctx.prisma.profile.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
