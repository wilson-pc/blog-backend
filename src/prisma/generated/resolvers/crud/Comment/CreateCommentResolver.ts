import * as TypeGraphQL from "type-graphql";
import { CreateCommentArgs } from "./args/CreateCommentArgs";
import { Comment } from "../../../models/Comment";

@TypeGraphQL.Resolver(_of => Comment)
export class CreateCommentResolver {
  @TypeGraphQL.Mutation(_returns => Comment, {
    nullable: false,
    description: undefined
  })
  async createComment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateCommentArgs): Promise<Comment> {
    return ctx.prisma.comment.create(args);
  }
}
