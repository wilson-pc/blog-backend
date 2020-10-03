import * as TypeGraphQL from "type-graphql";
import { UpsertImagenArgs } from "./args/UpsertImagenArgs";
import { Imagen } from "../../../models/Imagen";

@TypeGraphQL.Resolver(_of => Imagen)
export class UpsertImagenResolver {
  @TypeGraphQL.Mutation(_returns => Imagen, {
    nullable: false,
    description: undefined
  })
  async upsertImagen(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertImagenArgs): Promise<Imagen> {
    return ctx.prisma.imagen.upsert(args);
  }
}
