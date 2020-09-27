import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateProfileArgs } from "./args/AggregateProfileArgs";
import { CreateProfileArgs } from "./args/CreateProfileArgs";
import { DeleteManyProfileArgs } from "./args/DeleteManyProfileArgs";
import { DeleteProfileArgs } from "./args/DeleteProfileArgs";
import { FindManyProfileArgs } from "./args/FindManyProfileArgs";
import { FindOneProfileArgs } from "./args/FindOneProfileArgs";
import { UpdateManyProfileArgs } from "./args/UpdateManyProfileArgs";
import { UpdateProfileArgs } from "./args/UpdateProfileArgs";
import { UpsertProfileArgs } from "./args/UpsertProfileArgs";
import { Profile } from "../../../models/Profile";
import { AggregateProfile } from "../../outputs/AggregateProfile";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Profile)
export class ProfileCrudResolver {
  @TypeGraphQL.Query(_returns => Profile, {
    nullable: true,
    description: undefined
  })
  async profile(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneProfileArgs): Promise<Profile | null> {
    return ctx.prisma.profile.findOne(args);
  }

  @TypeGraphQL.Query(_returns => [Profile], {
    nullable: false,
    description: undefined
  })
  async profiles(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyProfileArgs): Promise<Profile[]> {
    return ctx.prisma.profile.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Profile, {
    nullable: false,
    description: undefined
  })
  async createProfile(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateProfileArgs): Promise<Profile> {
    return ctx.prisma.profile.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Profile, {
    nullable: true,
    description: undefined
  })
  async deleteProfile(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteProfileArgs): Promise<Profile | null> {
    return ctx.prisma.profile.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Profile, {
    nullable: true,
    description: undefined
  })
  async updateProfile(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateProfileArgs): Promise<Profile | null> {
    return ctx.prisma.profile.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyProfile(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyProfileArgs): Promise<BatchPayload> {
    return ctx.prisma.profile.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyProfile(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyProfileArgs): Promise<BatchPayload> {
    return ctx.prisma.profile.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Profile, {
    nullable: false,
    description: undefined
  })
  async upsertProfile(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertProfileArgs): Promise<Profile> {
    return ctx.prisma.profile.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateProfile, {
    nullable: false,
    description: undefined
  })
  async aggregateProfile(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateProfileArgs): Promise<AggregateProfile> {
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

    return ctx.prisma.profile.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
