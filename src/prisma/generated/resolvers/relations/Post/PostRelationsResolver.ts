import * as TypeGraphQL from "type-graphql";
import { Category } from "../../../models/Category";
import { Comment } from "../../../models/Comment";
import { Post } from "../../../models/Post";
import { User } from "../../../models/User";
import { PostCategoriesArgs } from "./args/PostCategoriesArgs";
import { PostCommentsArgs } from "./args/PostCommentsArgs";

@TypeGraphQL.Resolver(_of => Post)
export class PostRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false,
    description: undefined,
  })
  async author(@TypeGraphQL.Root() post: Post, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return ctx.prisma.post.findOne({
      where: {
        id: post.id,
      },
    }).author({});
  }

  @TypeGraphQL.FieldResolver(_type => [Category], {
    nullable: true,
    description: undefined,
  })
  async categories(@TypeGraphQL.Root() post: Post, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PostCategoriesArgs): Promise<Category[] | null> {
    return ctx.prisma.post.findOne({
      where: {
        id: post.id,
      },
    }).categories(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Comment], {
    nullable: true,
    description: undefined,
  })
  async comments(@TypeGraphQL.Root() post: Post, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PostCommentsArgs): Promise<Comment[] | null> {
    return ctx.prisma.post.findOne({
      where: {
        id: post.id,
      },
    }).comments(args);
  }
}
