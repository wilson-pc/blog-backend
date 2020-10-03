import * as TypeGraphQL from "type-graphql";
import { Resolution } from "../../../models/Resolution";
import { Video2 } from "../../../models/Video2";

@TypeGraphQL.Resolver(_of => Resolution)
export class ResolutionRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Video2, {
    nullable: false,
    description: undefined,
  })
  async video(@TypeGraphQL.Root() resolution: Resolution, @TypeGraphQL.Ctx() ctx: any): Promise<Video2> {
    return ctx.prisma.resolution.findOne({
      where: {
        id: resolution.id,
      },
    }).video({});
  }
}
