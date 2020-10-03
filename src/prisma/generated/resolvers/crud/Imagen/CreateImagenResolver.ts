import * as TypeGraphQL from "type-graphql";
import { CreateImagenArgs } from "./args/CreateImagenArgs";
import { Imagen } from "../../../models/Imagen";

@TypeGraphQL.Resolver(_of => Imagen)
export class CreateImagenResolver {
  @TypeGraphQL.Mutation(_returns => Imagen, {
    nullable: false,
    description: undefined
  })
  async createImagen(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateImagenArgs): Promise<Imagen> {
    return ctx.prisma.imagen.create(args);
  }
}
