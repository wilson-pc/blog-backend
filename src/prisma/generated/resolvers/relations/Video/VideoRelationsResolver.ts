import * as TypeGraphQL from "type-graphql";
import { Recipe } from "../../../models/Recipe";
import { Video } from "../../../models/Video";

@TypeGraphQL.Resolver(_of => Video)
export class VideoRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Recipe, {
    nullable: true,
    description: undefined,
  })
  async Recipe(@TypeGraphQL.Root() video: Video, @TypeGraphQL.Ctx() ctx: any): Promise<Recipe | null> {
    return ctx.prisma.video.findOne({
      where: {
        id: video.id,
      },
    }).Recipe({});
  }
}
