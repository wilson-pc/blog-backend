import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateImagenArgs } from "./args/AggregateImagenArgs";
import { Imagen } from "../../../models/Imagen";
import { AggregateImagen } from "../../outputs/AggregateImagen";

@TypeGraphQL.Resolver(_of => Imagen)
export class AggregateImagenResolver {
  @TypeGraphQL.Query(_returns => AggregateImagen, {
    nullable: false,
    description: undefined
  })
  async aggregateImagen(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateImagenArgs): Promise<AggregateImagen> {
    function transformFields(fields: Record<string, any>): Record<string, any> {
      return Object.fromEntries(
        Object.entries(fields)
          .filter(([key, value]) => !key.startsWith("_"))
          .map<[string, any]>(([key, value]) => {
            if (Object.keys(value).length === 0) {
              return [key, true];
            }
            return [key, transformFields(value)];
          }),
      );
    }

    return ctx.prisma.imagen.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
