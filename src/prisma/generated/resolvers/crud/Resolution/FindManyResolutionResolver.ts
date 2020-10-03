import * as TypeGraphQL from "type-graphql";
import { FindManyResolutionArgs } from "./args/FindManyResolutionArgs";
import { Resolution } from "../../../models/Resolution";

@TypeGraphQL.Resolver(_of => Resolution)
export class FindManyResolutionResolver {
  @TypeGraphQL.Query(_returns => [Resolution], {
    nullable: false,
    description: undefined
  })
  async resolutions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyResolutionArgs): Promise<Resolution[]> {
    return ctx.prisma.resolution.findMany(args);
  }
}
