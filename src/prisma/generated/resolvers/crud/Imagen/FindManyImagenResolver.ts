import * as TypeGraphQL from "type-graphql";
import { FindManyImagenArgs } from "./args/FindManyImagenArgs";
import { Imagen } from "../../../models/Imagen";

@TypeGraphQL.Resolver(_of => Imagen)
export class FindManyImagenResolver {
  @TypeGraphQL.Query(_returns => [Imagen], {
    nullable: false,
    description: undefined
  })
  async imagens(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyImagenArgs): Promise<Imagen[]> {
    return ctx.prisma.imagen.findMany(args);
  }
}
