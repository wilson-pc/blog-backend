import * as TypeGraphQL from "type-graphql";
import { DeleteManyResolutionArgs } from "./args/DeleteManyResolutionArgs";
import { Resolution } from "../../../models/Resolution";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Resolution)
export class DeleteManyResolutionResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyResolution(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyResolutionArgs): Promise<BatchPayload> {
    return ctx.prisma.resolution.deleteMany(args);
  }
}
