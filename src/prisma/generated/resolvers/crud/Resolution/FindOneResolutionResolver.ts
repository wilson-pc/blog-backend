import * as TypeGraphQL from "type-graphql";
import { FindOneResolutionArgs } from "./args/FindOneResolutionArgs";
import { Resolution } from "../../../models/Resolution";

@TypeGraphQL.Resolver(_of => Resolution)
export class FindOneResolutionResolver {
  @TypeGraphQL.Query(_returns => Resolution, {
    nullable: true,
    description: undefined
  })
  async resolution(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneResolutionArgs): Promise<Resolution | null> {
    return ctx.prisma.resolution.findOne(args);
  }
}
