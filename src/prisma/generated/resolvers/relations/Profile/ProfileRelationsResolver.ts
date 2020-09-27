import * as TypeGraphQL from "type-graphql";
import { Profile } from "../../../models/Profile";
import { User } from "../../../models/User";

@TypeGraphQL.Resolver(_of => Profile)
export class ProfileRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false,
    description: undefined,
  })
  async user(@TypeGraphQL.Root() profile: Profile, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return ctx.prisma.profile.findOne({
      where: {
        id: profile.id,
      },
    }).user({});
  }
}
