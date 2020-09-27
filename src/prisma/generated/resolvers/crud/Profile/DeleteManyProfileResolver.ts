import * as TypeGraphQL from "type-graphql";
import { DeleteManyProfileArgs } from "./args/DeleteManyProfileArgs";
import { Profile } from "../../../models/Profile";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Profile)
export class DeleteManyProfileResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyProfile(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyProfileArgs): Promise<BatchPayload> {
    return ctx.prisma.profile.deleteMany(args);
  }
}
