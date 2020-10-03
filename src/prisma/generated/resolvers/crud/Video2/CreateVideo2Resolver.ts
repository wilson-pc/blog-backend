import * as TypeGraphQL from "type-graphql";
import { CreateVideo2Args } from "./args/CreateVideo2Args";
import { Video2 } from "../../../models/Video2";

@TypeGraphQL.Resolver(_of => Video2)
export class CreateVideo2Resolver {
  @TypeGraphQL.Mutation(_returns => Video2, {
    nullable: false,
    description: undefined
  })
  async createVideo2(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateVideo2Args): Promise<Video2> {
    return ctx.prisma.video2.create(args);
  }
}
