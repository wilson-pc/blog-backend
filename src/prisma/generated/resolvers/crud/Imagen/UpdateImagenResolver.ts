import * as TypeGraphQL from "type-graphql";
import { UpdateImagenArgs } from "./args/UpdateImagenArgs";
import { Imagen } from "../../../models/Imagen";

@TypeGraphQL.Resolver(_of => Imagen)
export class UpdateImagenResolver {
  @TypeGraphQL.Mutation(_returns => Imagen, {
    nullable: true,
    description: undefined
  })
  async updateImagen(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateImagenArgs): Promise<Imagen | null> {
    return ctx.prisma.imagen.update(args);
  }
}
