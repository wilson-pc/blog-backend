import * as TypeGraphQL from "type-graphql";
import { UpdateStepArgs } from "./args/UpdateStepArgs";
import { Step } from "../../../models/Step";

@TypeGraphQL.Resolver(_of => Step)
export class UpdateStepResolver {
  @TypeGraphQL.Mutation(_returns => Step, {
    nullable: true,
    description: undefined
  })
  async updateStep(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateStepArgs): Promise<Step | null> {
    return ctx.prisma.step.update(args);
  }
}
