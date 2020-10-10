import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateStepArgs } from "./args/AggregateStepArgs";
import { Step } from "../../../models/Step";
import { AggregateStep } from "../../outputs/AggregateStep";

@TypeGraphQL.Resolver(_of => Step)
export class AggregateStepResolver {
  @TypeGraphQL.Query(_returns => AggregateStep, {
    nullable: false,
    description: undefined
  })
  async aggregateStep(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateStepArgs): Promise<AggregateStep> {
    function transformFields(fields: Record<string, any>): Record<string, any> {
      return Object.fromEntries(
        Object.entries(fields)
          .filter(([key, value]) => !key.startsWith("_"))
          .map<[string, any]>(([key, value]) => {
            if (Object.keys(value).length === 0) {
              return [key, true];
            }
            return [key, transformFields(value)];
          }),
      );
    }

    return ctx.prisma.step.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
