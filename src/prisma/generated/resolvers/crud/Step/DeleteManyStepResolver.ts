import * as TypeGraphQL from "type-graphql";
import { DeleteManyStepArgs } from "./args/DeleteManyStepArgs";
import { Step } from "../../../models/Step";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Step)
export class DeleteManyStepResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyStep(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyStepArgs): Promise<BatchPayload> {
    return ctx.prisma.step.deleteMany(args);
  }
}
