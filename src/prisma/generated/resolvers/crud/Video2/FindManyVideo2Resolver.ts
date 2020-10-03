import * as TypeGraphQL from "type-graphql";
import { FindManyVideo2Args } from "./args/FindManyVideo2Args";
import { Video2 } from "../../../models/Video2";

@TypeGraphQL.Resolver(_of => Video2)
export class FindManyVideo2Resolver {
  @TypeGraphQL.Query(_returns => [Video2], {
    nullable: false,
    description: undefined
  })
  async video2s(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyVideo2Args): Promise<Video2[]> {
    return ctx.prisma.video2.findMany(args);
  }
}
