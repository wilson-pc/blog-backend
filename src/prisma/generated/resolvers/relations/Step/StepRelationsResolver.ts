import * as TypeGraphQL from "type-graphql";
import { Imagen } from "../../../models/Imagen";
import { Step } from "../../../models/Step";
import { StepImagesArgs } from "./args/StepImagesArgs";

@TypeGraphQL.Resolver(_of => Step)
export class StepRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Imagen], {
    nullable: true,
    description: undefined,
  })
  async images(@TypeGraphQL.Root() step: Step, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: StepImagesArgs): Promise<Imagen[] | null> {
    return ctx.prisma.step.findOne({
      where: {
        id: step.id,
      },
    }).images(args);
  }
}
