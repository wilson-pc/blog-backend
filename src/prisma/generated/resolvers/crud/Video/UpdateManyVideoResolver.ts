import * as TypeGraphQL from "type-graphql";
import { UpdateManyVideoArgs } from "./args/UpdateManyVideoArgs";
import { Video } from "../../../models/Video";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Video)
export class UpdateManyVideoResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyVideo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyVideoArgs): Promise<BatchPayload> {
    return ctx.prisma.video.updateMany(args);
  }
}
