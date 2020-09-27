import * as TypeGraphQL from "type-graphql";
import { FindOneProfileArgs } from "./args/FindOneProfileArgs";
import { Profile } from "../../../models/Profile";

@TypeGraphQL.Resolver(_of => Profile)
export class FindOneProfileResolver {
  @TypeGraphQL.Query(_returns => Profile, {
    nullable: true,
    description: undefined
  })
  async profile(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneProfileArgs): Promise<Profile | null> {
    return ctx.prisma.profile.findOne(args);
  }
}
