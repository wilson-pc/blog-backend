import * as TypeGraphQL from "type-graphql";
import { FindOneImagenArgs } from "./args/FindOneImagenArgs";
import { Imagen } from "../../../models/Imagen";

@TypeGraphQL.Resolver(_of => Imagen)
export class FindOneImagenResolver {
  @TypeGraphQL.Query(_returns => Imagen, {
    nullable: true,
    description: undefined
  })
  async imagen(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneImagenArgs): Promise<Imagen | null> {
    return ctx.prisma.imagen.findOne(args);
  }
}
