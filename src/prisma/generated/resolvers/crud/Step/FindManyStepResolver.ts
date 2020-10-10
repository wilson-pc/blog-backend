import * as TypeGraphQL from "type-graphql";
import { FindManyStepArgs } from "./args/FindManyStepArgs";
import { Step } from "../../../models/Step";

@TypeGraphQL.Resolver(_of => Step)
export class FindManyStepResolver {
  @TypeGraphQL.Query(_returns => [Step], {
    nullable: false,
    description: undefined
  })
  async steps(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyStepArgs): Promise<Step[]> {
    return ctx.prisma.step.findMany(args);
  }
}
