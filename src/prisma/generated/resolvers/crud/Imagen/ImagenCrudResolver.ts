import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateImagenArgs } from "./args/AggregateImagenArgs";
import { CreateImagenArgs } from "./args/CreateImagenArgs";
import { DeleteImagenArgs } from "./args/DeleteImagenArgs";
import { DeleteManyImagenArgs } from "./args/DeleteManyImagenArgs";
import { FindManyImagenArgs } from "./args/FindManyImagenArgs";
import { FindOneImagenArgs } from "./args/FindOneImagenArgs";
import { UpdateImagenArgs } from "./args/UpdateImagenArgs";
import { UpdateManyImagenArgs } from "./args/UpdateManyImagenArgs";
import { UpsertImagenArgs } from "./args/UpsertImagenArgs";
import { Imagen } from "../../../models/Imagen";
import { AggregateImagen } from "../../outputs/AggregateImagen";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Imagen)
export class ImagenCrudResolver {
  @TypeGraphQL.Query(_returns => Imagen, {
    nullable: true,
    description: undefined
  })
  async imagen(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneImagenArgs): Promise<Imagen | null> {
    return ctx.prisma.imagen.findOne(args);
  }

  @TypeGraphQL.Query(_returns => [Imagen], {
    nullable: false,
    description: undefined
  })
  async imagens(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyImagenArgs): Promise<Imagen[]> {
    return ctx.prisma.imagen.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Imagen, {
    nullable: false,
    description: undefined
  })
  async createImagen(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateImagenArgs): Promise<Imagen> {
    return ctx.prisma.imagen.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Imagen, {
    nullable: true,
    description: undefined
  })
  async deleteImagen(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteImagenArgs): Promise<Imagen | null> {
    return ctx.prisma.imagen.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Imagen, {
    nullable: true,
    description: undefined
  })
  async updateImagen(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateImagenArgs): Promise<Imagen | null> {
    return ctx.prisma.imagen.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyImagen(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyImagenArgs): Promise<BatchPayload> {
    return ctx.prisma.imagen.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyImagen(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyImagenArgs): Promise<BatchPayload> {
    return ctx.prisma.imagen.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Imagen, {
    nullable: false,
    description: undefined
  })
  async upsertImagen(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertImagenArgs): Promise<Imagen> {
    return ctx.prisma.imagen.upsert(args);
  }

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
