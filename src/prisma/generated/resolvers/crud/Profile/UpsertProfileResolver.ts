import * as TypeGraphQL from "type-graphql";
import { UpsertProfileArgs } from "./args/UpsertProfileArgs";
import { Profile } from "../../../models/Profile";

@TypeGraphQL.Resolver(_of => Profile)
export class UpsertProfileResolver {
  @TypeGraphQL.Mutation(_returns => Profile, {
    nullable: false,
    description: undefined
  })
  async upsertProfile(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertProfileArgs): Promise<Profile> {
    return ctx.prisma.profile.upsert(args);
  }
}
