import * as TypeGraphQL from "type-graphql";
import { DeleteManyVideoArgs } from "./args/DeleteManyVideoArgs";
import { Video } from "../../../models/Video";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Video)
export class DeleteManyVideoResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyVideo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyVideoArgs): Promise<BatchPayload> {
    return ctx.prisma.video.deleteMany(args);
  }
}
