import * as TypeGraphQL from "type-graphql";
import { UpsertVideoArgs } from "./args/UpsertVideoArgs";
import { Video } from "../../../models/Video";

@TypeGraphQL.Resolver(_of => Video)
export class UpsertVideoResolver {
  @TypeGraphQL.Mutation(_returns => Video, {
    nullable: false,
    description: undefined
  })
  async upsertVideo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertVideoArgs): Promise<Video> {
    return ctx.prisma.video.upsert(args);
  }
}
