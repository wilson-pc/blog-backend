import * as TypeGraphQL from "type-graphql";
import { Comment } from "../../../models/Comment";
import { Post } from "../../../models/Post";
import { User } from "../../../models/User";
import { CommentUsersArgs } from "./args/CommentUsersArgs";

@TypeGraphQL.Resolver(_of => Comment)
export class CommentRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Post, {
    nullable: false,
    description: undefined,
  })
  async posts(@TypeGraphQL.Root() comment: Comment, @TypeGraphQL.Ctx() ctx: any): Promise<Post> {
    return ctx.prisma.comment.findOne({
      where: {
        id: comment.id,
      },
    }).posts({});
  }

  @TypeGraphQL.FieldResolver(_type => [User], {
    nullable: true,
    description: undefined,
  })
  async users(@TypeGraphQL.Root() comment: Comment, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CommentUsersArgs): Promise<User[] | null> {
    return ctx.prisma.comment.findOne({
      where: {
        id: comment.id,
      },
    }).users(args);
  }
}
