import * as TypeGraphQL from "type-graphql";
import { CreateStepArgs } from "./args/CreateStepArgs";
import { Step } from "../../../models/Step";

@TypeGraphQL.Resolver(_of => Step)
export class CreateStepResolver {
  @TypeGraphQL.Mutation(_returns => Step, {
    nullable: false,
    description: undefined
  })
  async createStep(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateStepArgs): Promise<Step> {
    return ctx.prisma.step.create(args);
  }
}
