import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateVideoArgs } from "./args/AggregateVideoArgs";
import { CreateVideoArgs } from "./args/CreateVideoArgs";
import { DeleteManyVideoArgs } from "./args/DeleteManyVideoArgs";
import { DeleteVideoArgs } from "./args/DeleteVideoArgs";
import { FindManyVideoArgs } from "./args/FindManyVideoArgs";
import { FindOneVideoArgs } from "./args/FindOneVideoArgs";
import { UpdateManyVideoArgs } from "./args/UpdateManyVideoArgs";
import { UpdateVideoArgs } from "./args/UpdateVideoArgs";
import { UpsertVideoArgs } from "./args/UpsertVideoArgs";
import { Video } from "../../../models/Video";
import { AggregateVideo } from "../../outputs/AggregateVideo";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Video)
export class VideoCrudResolver {
  @TypeGraphQL.Query(_returns => Video, {
    nullable: true,
    description: undefined
  })
  async video(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneVideoArgs): Promise<Video | null> {
    return ctx.prisma.video.findOne(args);
  }

  @TypeGraphQL.Query(_returns => [Video], {
    nullable: false,
    description: undefined
  })
  async videos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyVideoArgs): Promise<Video[]> {
    return ctx.prisma.video.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Video, {
    nullable: false,
    description: undefined
  })
  async createVideo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateVideoArgs): Promise<Video> {
    return ctx.prisma.video.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Video, {
    nullable: true,
    description: undefined
  })
  async deleteVideo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteVideoArgs): Promise<Video | null> {
    return ctx.prisma.video.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Video, {
    nullable: true,
    description: undefined
  })
  async updateVideo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateVideoArgs): Promise<Video | null> {
    return ctx.prisma.video.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyVideo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyVideoArgs): Promise<BatchPayload> {
    return ctx.prisma.video.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyVideo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyVideoArgs): Promise<BatchPayload> {
    return ctx.prisma.video.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Video, {
    nullable: false,
    description: undefined
  })
  async upsertVideo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertVideoArgs): Promise<Video> {
    return ctx.prisma.video.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateVideo, {
    nullable: false,
    description: undefined
  })
  async aggregateVideo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateVideoArgs): Promise<AggregateVideo> {
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

    return ctx.prisma.video.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
