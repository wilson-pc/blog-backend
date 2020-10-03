import * as TypeGraphQL from "type-graphql";
import { UpdateVideo2Args } from "./args/UpdateVideo2Args";
import { Video2 } from "../../../models/Video2";

@TypeGraphQL.Resolver(_of => Video2)
export class UpdateVideo2Resolver {
  @TypeGraphQL.Mutation(_returns => Video2, {
    nullable: true,
    description: undefined
  })
  async updateVideo2(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateVideo2Args): Promise<Video2 | null> {
    return ctx.prisma.video2.update(args);
  }
}
