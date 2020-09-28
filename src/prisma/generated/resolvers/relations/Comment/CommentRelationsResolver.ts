import * as TypeGraphQL from "type-graphql";
import { Comment } from "../../../models/Comment";
import { Post } from "../../../models/Post";
import { User } from "../../../models/User";

@TypeGraphQL.Resolver(_of => Comment)
export class CommentRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Post, {
    nullable: false,
    description: undefined,
  })
  async post(@TypeGraphQL.Root() comment: Comment, @TypeGraphQL.Ctx() ctx: any): Promise<Post> {
    return ctx.prisma.comment.findOne({
      where: {
        id: comment.id,
      },
    }).post({});
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true,
    description: undefined,
  })
  async user(@TypeGraphQL.Root() comment: Comment, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return ctx.prisma.comment.findOne({
      where: {
        id: comment.id,
      },
    }).user({});
  }
}
