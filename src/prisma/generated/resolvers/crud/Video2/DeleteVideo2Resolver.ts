import * as TypeGraphQL from "type-graphql";
import { DeleteVideo2Args } from "./args/DeleteVideo2Args";
import { Video2 } from "../../../models/Video2";

@TypeGraphQL.Resolver(_of => Video2)
export class DeleteVideo2Resolver {
  @TypeGraphQL.Mutation(_returns => Video2, {
    nullable: true,
    description: undefined
  })
  async deleteVideo2(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteVideo2Args): Promise<Video2 | null> {
    return ctx.prisma.video2.delete(args);
  }
}
