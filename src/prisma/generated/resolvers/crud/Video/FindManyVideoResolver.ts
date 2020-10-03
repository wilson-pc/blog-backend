import * as TypeGraphQL from "type-graphql";
import { FindManyVideoArgs } from "./args/FindManyVideoArgs";
import { Video } from "../../../models/Video";

@TypeGraphQL.Resolver(_of => Video)
export class FindManyVideoResolver {
  @TypeGraphQL.Query(_returns => [Video], {
    nullable: false,
    description: undefined
  })
  async videos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyVideoArgs): Promise<Video[]> {
    return ctx.prisma.video.findMany(args);
  }
}
