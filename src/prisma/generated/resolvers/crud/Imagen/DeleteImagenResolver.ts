import * as TypeGraphQL from "type-graphql";
import { DeleteImagenArgs } from "./args/DeleteImagenArgs";
import { Imagen } from "../../../models/Imagen";

@TypeGraphQL.Resolver(_of => Imagen)
export class DeleteImagenResolver {
  @TypeGraphQL.Mutation(_returns => Imagen, {
    nullable: true,
    description: undefined
  })
  async deleteImagen(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteImagenArgs): Promise<Imagen | null> {
    return ctx.prisma.imagen.delete(args);
  }
}
