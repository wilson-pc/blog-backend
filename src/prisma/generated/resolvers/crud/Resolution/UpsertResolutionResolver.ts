import * as TypeGraphQL from "type-graphql";
import { UpsertResolutionArgs } from "./args/UpsertResolutionArgs";
import { Resolution } from "../../../models/Resolution";

@TypeGraphQL.Resolver(_of => Resolution)
export class UpsertResolutionResolver {
  @TypeGraphQL.Mutation(_returns => Resolution, {
    nullable: false,
    description: undefined
  })
  async upsertResolution(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertResolutionArgs): Promise<Resolution> {
    return ctx.prisma.resolution.upsert(args);
  }
}
