import * as TypeGraphQL from "type-graphql";
import { DeleteProfileArgs } from "./args/DeleteProfileArgs";
import { Profile } from "../../../models/Profile";

@TypeGraphQL.Resolver(_of => Profile)
export class DeleteProfileResolver {
  @TypeGraphQL.Mutation(_returns => Profile, {
    nullable: true,
    description: undefined
  })
  async deleteProfile(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteProfileArgs): Promise<Profile | null> {
    return ctx.prisma.profile.delete(args);
  }
}
