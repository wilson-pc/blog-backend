import * as TypeGraphQL from "type-graphql";
import { CreateResolutionArgs } from "./args/CreateResolutionArgs";
import { Resolution } from "../../../models/Resolution";

@TypeGraphQL.Resolver(_of => Resolution)
export class CreateResolutionResolver {
  @TypeGraphQL.Mutation(_returns => Resolution, {
    nullable: false,
    description: undefined
  })
  async createResolution(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateResolutionArgs): Promise<Resolution> {
    return ctx.prisma.resolution.create(args);
  }
}
