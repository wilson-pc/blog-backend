import {
  Arg,
  Authorized,
  Publisher,
  PubSub,
  Resolver,
  Root,
  Subscription,
} from 'type-graphql';
import * as TypeGraphQL from 'type-graphql';
import {
  CreateCommentArgs,
  DeleteCommentArgs,
  FindManyCommentArgs,
  FindOneCommentArgs,
  Comment,
} from 'src/prisma/generated';

@Resolver()
export class CommentResolver {
  @Authorized()
  @TypeGraphQL.Query(_returns => Comment, {
    nullable: true,
    description: undefined,
  })
  async comment(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: FindOneCommentArgs,
  ): Promise<Comment | null> {
    return ctx.prisma.comment.findOne(args);
  }

  @Authorized()
  @TypeGraphQL.Query(_returns => [Comment], {
    nullable: false,
    description: undefined,
  })
  async comments(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: FindManyCommentArgs,
  ): Promise<Comment[]> {
    return ctx.prisma.comment.findMany(args);
  }

  @Authorized()
  @TypeGraphQL.Mutation(_returns => Comment, {
    nullable: false,
    description: undefined,
  })
  async createComment(
    @PubSub('CREATE-MESSAGE-EVENT') publish: Publisher<Comment>,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: CreateCommentArgs,
  ): Promise<Comment> {
    let comment = await ctx.prisma.comment.create(args);
    await publish(comment);
    return comment;
  }

  @Authorized()
  @TypeGraphQL.Mutation(_returns => Comment, {
    nullable: true,
    description: undefined,
  })
  async deleteComment(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: DeleteCommentArgs,
  ): Promise<Comment | null> {
    return ctx.prisma.comment.delete(args);
  }

  @Subscription({
    topics: 'CREATE-MESSAGE-EVENT',
    filter: ({ payload, args }) => args.postId == payload.postId,
  })
  commenthEvent(
    @Root() comment: Comment,
    @Arg('postId') postId?: string,
  ): Comment {
    // ...

    return comment;
  }
}
