import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateVideo2Args } from "./args/AggregateVideo2Args";
import { CreateVideo2Args } from "./args/CreateVideo2Args";
import { DeleteManyVideo2Args } from "./args/DeleteManyVideo2Args";
import { DeleteVideo2Args } from "./args/DeleteVideo2Args";
import { FindManyVideo2Args } from "./args/FindManyVideo2Args";
import { FindOneVideo2Args } from "./args/FindOneVideo2Args";
import { UpdateManyVideo2Args } from "./args/UpdateManyVideo2Args";
import { UpdateVideo2Args } from "./args/UpdateVideo2Args";
import { UpsertVideo2Args } from "./args/UpsertVideo2Args";
import { Video2 } from "../../../models/Video2";
import { AggregateVideo2 } from "../../outputs/AggregateVideo2";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Video2)
export class Video2CrudResolver {
  @TypeGraphQL.Query(_returns => Video2, {
    nullable: true,
    description: undefined
  })
  async video2(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneVideo2Args): Promise<Video2 | null> {
    return ctx.prisma.video2.findOne(args);
  }

  @TypeGraphQL.Query(_returns => [Video2], {
    nullable: false,
    description: undefined
  })
  async video2s(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyVideo2Args): Promise<Video2[]> {
    return ctx.prisma.video2.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Video2, {
    nullable: false,
    description: undefined
  })
  async createVideo2(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateVideo2Args): Promise<Video2> {
    return ctx.prisma.video2.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Video2, {
    nullable: true,
    description: undefined
  })
  async deleteVideo2(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteVideo2Args): Promise<Video2 | null> {
    return ctx.prisma.video2.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Video2, {
    nullable: true,
    description: undefined
  })
  async updateVideo2(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateVideo2Args): Promise<Video2 | null> {
    return ctx.prisma.video2.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyVideo2(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyVideo2Args): Promise<BatchPayload> {
    return ctx.prisma.video2.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyVideo2(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyVideo2Args): Promise<BatchPayload> {
    return ctx.prisma.video2.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Video2, {
    nullable: false,
    description: undefined
  })
  async upsertVideo2(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertVideo2Args): Promise<Video2> {
    return ctx.prisma.video2.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateVideo2, {
    nullable: false,
    description: undefined
  })
  async aggregateVideo2(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateVideo2Args): Promise<AggregateVideo2> {
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

    return ctx.prisma.video2.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
