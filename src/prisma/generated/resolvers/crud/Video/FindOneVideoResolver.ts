import * as TypeGraphQL from "type-graphql";
import { FindOneVideoArgs } from "./args/FindOneVideoArgs";
import { Video } from "../../../models/Video";

@TypeGraphQL.Resolver(_of => Video)
export class FindOneVideoResolver {
  @TypeGraphQL.Query(_returns => Video, {
    nullable: true,
    description: undefined
  })
  async video(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneVideoArgs): Promise<Video | null> {
    return ctx.prisma.video.findOne(args);
  }
}
