import * as TypeGraphQL from "type-graphql";
import { UpsertStepArgs } from "./args/UpsertStepArgs";
import { Step } from "../../../models/Step";

@TypeGraphQL.Resolver(_of => Step)
export class UpsertStepResolver {
  @TypeGraphQL.Mutation(_returns => Step, {
    nullable: false,
    description: undefined
  })
  async upsertStep(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertStepArgs): Promise<Step> {
    return ctx.prisma.step.upsert(args);
  }
}
