import * as TypeGraphQL from "type-graphql";
import { Imagen } from "../../../models/Imagen";
import { Step } from "../../../models/Step";

@TypeGraphQL.Resolver(_of => Imagen)
export class ImagenRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Step, {
    nullable: true,
    description: undefined,
  })
  async Step(@TypeGraphQL.Root() imagen: Imagen, @TypeGraphQL.Ctx() ctx: any): Promise<Step | null> {
    return ctx.prisma.imagen.findOne({
      where: {
        id: imagen.id,
      },
    }).Step({});
  }
}
