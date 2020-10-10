import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateStepArgs } from "./args/AggregateStepArgs";
import { CreateStepArgs } from "./args/CreateStepArgs";
import { DeleteManyStepArgs } from "./args/DeleteManyStepArgs";
import { DeleteStepArgs } from "./args/DeleteStepArgs";
import { FindManyStepArgs } from "./args/FindManyStepArgs";
import { FindOneStepArgs } from "./args/FindOneStepArgs";
import { UpdateManyStepArgs } from "./args/UpdateManyStepArgs";
import { UpdateStepArgs } from "./args/UpdateStepArgs";
import { UpsertStepArgs } from "./args/UpsertStepArgs";
import { Step } from "../../../models/Step";
import { AggregateStep } from "../../outputs/AggregateStep";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Step)
export class StepCrudResolver {
  @TypeGraphQL.Query(_returns => Step, {
    nullable: true,
    description: undefined
  })
  async step(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneStepArgs): Promise<Step | null> {
    return ctx.prisma.step.findOne(args);
  }

  @TypeGraphQL.Query(_returns => [Step], {
    nullable: false,
    description: undefined
  })
  async steps(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyStepArgs): Promise<Step[]> {
    return ctx.prisma.step.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Step, {
    nullable: false,
    description: undefined
  })
  async createStep(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateStepArgs): Promise<Step> {
    return ctx.prisma.step.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Step, {
    nullable: true,
    description: undefined
  })
  async deleteStep(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteStepArgs): Promise<Step | null> {
    return ctx.prisma.step.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Step, {
    nullable: true,
    description: undefined
  })
  async updateStep(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateStepArgs): Promise<Step | null> {
    return ctx.prisma.step.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyStep(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyStepArgs): Promise<BatchPayload> {
    return ctx.prisma.step.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyStep(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyStepArgs): Promise<BatchPayload> {
    return ctx.prisma.step.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Step, {
    nullable: false,
    description: undefined
  })
  async upsertStep(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertStepArgs): Promise<Step> {
    return ctx.prisma.step.upsert(args);
  }

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
