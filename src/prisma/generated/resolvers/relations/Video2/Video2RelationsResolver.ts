import * as TypeGraphQL from "type-graphql";
import { Resolution } from "../../../models/Resolution";
import { Video2 } from "../../../models/Video2";
import { Video2ResolutionsArgs } from "./args/Video2ResolutionsArgs";

@TypeGraphQL.Resolver(_of => Video2)
export class Video2RelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Resolution], {
    nullable: true,
    description: undefined,
  })
  async resolutions(@TypeGraphQL.Root() video2: Video2, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: Video2ResolutionsArgs): Promise<Resolution[] | null> {
    return ctx.prisma.video2.findOne({
      where: {
        id: video2.id,
      },
    }).resolutions(args);
  }
}
