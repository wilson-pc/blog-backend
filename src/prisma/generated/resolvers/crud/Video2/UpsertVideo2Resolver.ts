import * as TypeGraphQL from "type-graphql";
import { UpsertVideo2Args } from "./args/UpsertVideo2Args";
import { Video2 } from "../../../models/Video2";

@TypeGraphQL.Resolver(_of => Video2)
export class UpsertVideo2Resolver {
  @TypeGraphQL.Mutation(_returns => Video2, {
    nullable: false,
    description: undefined
  })
  async upsertVideo2(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertVideo2Args): Promise<Video2> {
    return ctx.prisma.video2.upsert(args);
  }
}
