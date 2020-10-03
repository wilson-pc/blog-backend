import * as TypeGraphQL from "type-graphql";
import { DeleteVideoArgs } from "./args/DeleteVideoArgs";
import { Video } from "../../../models/Video";

@TypeGraphQL.Resolver(_of => Video)
export class DeleteVideoResolver {
  @TypeGraphQL.Mutation(_returns => Video, {
    nullable: true,
    description: undefined
  })
  async deleteVideo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteVideoArgs): Promise<Video | null> {
    return ctx.prisma.video.delete(args);
  }
}
