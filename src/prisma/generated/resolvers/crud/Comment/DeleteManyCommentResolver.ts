import * as TypeGraphQL from "type-graphql";
import { DeleteManyCommentArgs } from "./args/DeleteManyCommentArgs";
import { Comment } from "../../../models/Comment";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Comment)
export class DeleteManyCommentResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyComment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCommentArgs): Promise<BatchPayload> {
    return ctx.prisma.comment.deleteMany(args);
  }
}
