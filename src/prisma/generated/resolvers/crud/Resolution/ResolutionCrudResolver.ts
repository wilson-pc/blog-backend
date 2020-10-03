import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateResolutionArgs } from "./args/AggregateResolutionArgs";
import { CreateResolutionArgs } from "./args/CreateResolutionArgs";
import { DeleteManyResolutionArgs } from "./args/DeleteManyResolutionArgs";
import { DeleteResolutionArgs } from "./args/DeleteResolutionArgs";
import { FindManyResolutionArgs } from "./args/FindManyResolutionArgs";
import { FindOneResolutionArgs } from "./args/FindOneResolutionArgs";
import { UpdateManyResolutionArgs } from "./args/UpdateManyResolutionArgs";
import { UpdateResolutionArgs } from "./args/UpdateResolutionArgs";
import { UpsertResolutionArgs } from "./args/UpsertResolutionArgs";
import { Resolution } from "../../../models/Resolution";
import { AggregateResolution } from "../../outputs/AggregateResolution";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Resolution)
export class ResolutionCrudResolver {
  @TypeGraphQL.Query(_returns => Resolution, {
    nullable: true,
    description: undefined
  })
  async resolution(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneResolutionArgs): Promise<Resolution | null> {
    return ctx.prisma.resolution.findOne(args);
  }

  @TypeGraphQL.Query(_returns => [Resolution], {
    nullable: false,
    description: undefined
  })
  async resolutions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyResolutionArgs): Promise<Resolution[]> {
    return ctx.prisma.resolution.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Resolution, {
    nullable: false,
    description: undefined
  })
  async createResolution(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateResolutionArgs): Promise<Resolution> {
    return ctx.prisma.resolution.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Resolution, {
    nullable: true,
    description: undefined
  })
  async deleteResolution(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteResolutionArgs): Promise<Resolution | null> {
    return ctx.prisma.resolution.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Resolution, {
    nullable: true,
    description: undefined
  })
  async updateResolution(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateResolutionArgs): Promise<Resolution | null> {
    return ctx.prisma.resolution.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyResolution(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyResolutionArgs): Promise<BatchPayload> {
    return ctx.prisma.resolution.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyResolution(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyResolutionArgs): Promise<BatchPayload> {
    return ctx.prisma.resolution.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Resolution, {
    nullable: false,
    description: undefined
  })
  async upsertResolution(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertResolutionArgs): Promise<Resolution> {
    return ctx.prisma.resolution.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateResolution, {
    nullable: false,
    description: undefined
  })
  async aggregateResolution(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateResolutionArgs): Promise<AggregateResolution> {
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

    return ctx.prisma.resolution.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
