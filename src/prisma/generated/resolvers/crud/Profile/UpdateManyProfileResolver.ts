import * as TypeGraphQL from "type-graphql";
import { UpdateManyProfileArgs } from "./args/UpdateManyProfileArgs";
import { Profile } from "../../../models/Profile";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Profile)
export class UpdateManyProfileResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyProfile(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyProfileArgs): Promise<BatchPayload> {
    return ctx.prisma.profile.updateMany(args);
  }
}
