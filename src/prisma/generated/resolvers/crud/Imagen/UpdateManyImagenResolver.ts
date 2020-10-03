import * as TypeGraphQL from "type-graphql";
import { UpdateManyImagenArgs } from "./args/UpdateManyImagenArgs";
import { Imagen } from "../../../models/Imagen";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Imagen)
export class UpdateManyImagenResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyImagen(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyImagenArgs): Promise<BatchPayload> {
    return ctx.prisma.imagen.updateMany(args);
  }
}
