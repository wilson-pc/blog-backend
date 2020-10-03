import * as TypeGraphQL from "type-graphql";
import { UpdateManyResolutionArgs } from "./args/UpdateManyResolutionArgs";
import { Resolution } from "../../../models/Resolution";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Resolution)
export class UpdateManyResolutionResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyResolution(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyResolutionArgs): Promise<BatchPayload> {
    return ctx.prisma.resolution.updateMany(args);
  }
}
