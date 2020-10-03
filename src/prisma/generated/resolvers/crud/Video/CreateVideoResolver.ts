import * as TypeGraphQL from "type-graphql";
import { CreateVideoArgs } from "./args/CreateVideoArgs";
import { Video } from "../../../models/Video";

@TypeGraphQL.Resolver(_of => Video)
export class CreateVideoResolver {
  @TypeGraphQL.Mutation(_returns => Video, {
    nullable: false,
    description: undefined
  })
  async createVideo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateVideoArgs): Promise<Video> {
    return ctx.prisma.video.create(args);
  }
}
