import * as TypeGraphQL from "type-graphql";
import { CreateProfileArgs } from "./args/CreateProfileArgs";
import { Profile } from "../../../models/Profile";

@TypeGraphQL.Resolver(_of => Profile)
export class CreateProfileResolver {
  @TypeGraphQL.Mutation(_returns => Profile, {
    nullable: false,
    description: undefined
  })
  async createProfile(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateProfileArgs): Promise<Profile> {
    return ctx.prisma.profile.create(args);
  }
}
