import * as TypeGraphQL from "type-graphql";
import { FindOneVideo2Args } from "./args/FindOneVideo2Args";
import { Video2 } from "../../../models/Video2";

@TypeGraphQL.Resolver(_of => Video2)
export class FindOneVideo2Resolver {
  @TypeGraphQL.Query(_returns => Video2, {
    nullable: true,
    description: undefined
  })
  async video2(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneVideo2Args): Promise<Video2 | null> {
    return ctx.prisma.video2.findOne(args);
  }
}
