import * as TypeGraphQL from "type-graphql";
import { UpdateVideoArgs } from "./args/UpdateVideoArgs";
import { Video } from "../../../models/Video";

@TypeGraphQL.Resolver(_of => Video)
export class UpdateVideoResolver {
  @TypeGraphQL.Mutation(_returns => Video, {
    nullable: true,
    description: undefined
  })
  async updateVideo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateVideoArgs): Promise<Video | null> {
    return ctx.prisma.video.update(args);
  }
}
