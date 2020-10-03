import * as TypeGraphQL from "type-graphql";
import { DeleteManyImagenArgs } from "./args/DeleteManyImagenArgs";
import { Imagen } from "../../../models/Imagen";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Imagen)
export class DeleteManyImagenResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyImagen(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyImagenArgs): Promise<BatchPayload> {
    return ctx.prisma.imagen.deleteMany(args);
  }
}
