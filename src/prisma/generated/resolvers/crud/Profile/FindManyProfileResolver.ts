import * as TypeGraphQL from "type-graphql";
import { FindManyProfileArgs } from "./args/FindManyProfileArgs";
import { Profile } from "../../../models/Profile";

@TypeGraphQL.Resolver(_of => Profile)
export class FindManyProfileResolver {
  @TypeGraphQL.Query(_returns => [Profile], {
    nullable: false,
    description: undefined
  })
  async profiles(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyProfileArgs): Promise<Profile[]> {
    return ctx.prisma.profile.findMany(args);
  }
}
