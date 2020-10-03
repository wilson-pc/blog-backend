import * as TypeGraphQL from "type-graphql";
import { DeleteResolutionArgs } from "./args/DeleteResolutionArgs";
import { Resolution } from "../../../models/Resolution";

@TypeGraphQL.Resolver(_of => Resolution)
export class DeleteResolutionResolver {
  @TypeGraphQL.Mutation(_returns => Resolution, {
    nullable: true,
    description: undefined
  })
  async deleteResolution(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteResolutionArgs): Promise<Resolution | null> {
    return ctx.prisma.resolution.delete(args);
  }
}
