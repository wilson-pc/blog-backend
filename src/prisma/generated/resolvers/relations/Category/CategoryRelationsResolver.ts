import * as TypeGraphQL from "type-graphql";
import { Category } from "../../../models/Category";
import { Post } from "../../../models/Post";
import { CategoryPostsArgs } from "./args/CategoryPostsArgs";

@TypeGraphQL.Resolver(_of => Category)
export class CategoryRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Post], {
    nullable: true,
    description: undefined,
  })
  async posts(@TypeGraphQL.Root() category: Category, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CategoryPostsArgs): Promise<Post[] | null> {
    return ctx.prisma.category.findOne({
      where: {
        id: category.id,
      },
    }).posts(args);
  }
}
