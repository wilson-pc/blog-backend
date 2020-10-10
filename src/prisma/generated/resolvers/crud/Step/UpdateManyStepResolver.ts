import * as TypeGraphQL from "type-graphql";
import { UpdateManyStepArgs } from "./args/UpdateManyStepArgs";
import { Step } from "../../../models/Step";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Step)
export class UpdateManyStepResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyStep(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyStepArgs): Promise<BatchPayload> {
    return ctx.prisma.step.updateMany(args);
  }
}
