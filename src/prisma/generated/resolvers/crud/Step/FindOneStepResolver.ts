import * as TypeGraphQL from "type-graphql";
import { FindOneStepArgs } from "./args/FindOneStepArgs";
import { Step } from "../../../models/Step";

@TypeGraphQL.Resolver(_of => Step)
export class FindOneStepResolver {
  @TypeGraphQL.Query(_returns => Step, {
    nullable: true,
    description: undefined
  })
  async step(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneStepArgs): Promise<Step | null> {
    return ctx.prisma.step.findOne(args);
  }
}
