import * as TypeGraphQL from "type-graphql";
import { UpdateProfileArgs } from "./args/UpdateProfileArgs";
import { Profile } from "../../../models/Profile";

@TypeGraphQL.Resolver(_of => Profile)
export class UpdateProfileResolver {
  @TypeGraphQL.Mutation(_returns => Profile, {
    nullable: true,
    description: undefined
  })
  async updateProfile(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateProfileArgs): Promise<Profile | null> {
    return ctx.prisma.profile.update(args);
  }
}
