import * as TypeGraphQL from "type-graphql";
import { UpdateResolutionArgs } from "./args/UpdateResolutionArgs";
import { Resolution } from "../../../models/Resolution";

@TypeGraphQL.Resolver(_of => Resolution)
export class UpdateResolutionResolver {
  @TypeGraphQL.Mutation(_returns => Resolution, {
    nullable: true,
    description: undefined
  })
  async updateResolution(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateResolutionArgs): Promise<Resolution | null> {
    return ctx.prisma.resolution.update(args);
  }
}
