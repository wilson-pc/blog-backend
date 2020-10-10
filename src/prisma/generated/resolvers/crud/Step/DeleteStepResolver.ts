import * as TypeGraphQL from "type-graphql";
import { DeleteStepArgs } from "./args/DeleteStepArgs";
import { Step } from "../../../models/Step";

@TypeGraphQL.Resolver(_of => Step)
export class DeleteStepResolver {
  @TypeGraphQL.Mutation(_returns => Step, {
    nullable: true,
    description: undefined
  })
  async deleteStep(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteStepArgs): Promise<Step | null> {
    return ctx.prisma.step.delete(args);
  }
}
