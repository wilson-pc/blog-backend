import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateIngredientArgs } from "./args/AggregateIngredientArgs";
import { CreateIngredientArgs } from "./args/CreateIngredientArgs";
import { DeleteIngredientArgs } from "./args/DeleteIngredientArgs";
import { DeleteManyIngredientArgs } from "./args/DeleteManyIngredientArgs";
import { FindManyIngredientArgs } from "./args/FindManyIngredientArgs";
import { FindOneIngredientArgs } from "./args/FindOneIngredientArgs";
import { UpdateIngredientArgs } from "./args/UpdateIngredientArgs";
import { UpdateManyIngredientArgs } from "./args/UpdateManyIngredientArgs";
import { UpsertIngredientArgs } from "./args/UpsertIngredientArgs";
import { Ingredient } from "../../../models/Ingredient";
import { AggregateIngredient } from "../../outputs/AggregateIngredient";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Ingredient)
export class IngredientCrudResolver {
  @TypeGraphQL.Query(_returns => Ingredient, {
    nullable: true,
    description: undefined
  })
  async ingredient(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneIngredientArgs): Promise<Ingredient | null> {
    return ctx.prisma.ingredient.findOne(args);
  }

  @TypeGraphQL.Query(_returns => [Ingredient], {
    nullable: false,
    description: undefined
  })
  async ingredients(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyIngredientArgs): Promise<Ingredient[]> {
    return ctx.prisma.ingredient.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Ingredient, {
    nullable: false,
    description: undefined
  })
  async createIngredient(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateIngredientArgs): Promise<Ingredient> {
    return ctx.prisma.ingredient.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Ingredient, {
    nullable: true,
    description: undefined
  })
  async deleteIngredient(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteIngredientArgs): Promise<Ingredient | null> {
    return ctx.prisma.ingredient.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Ingredient, {
    nullable: true,
    description: undefined
  })
  async updateIngredient(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateIngredientArgs): Promise<Ingredient | null> {
    return ctx.prisma.ingredient.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyIngredient(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyIngredientArgs): Promise<BatchPayload> {
    return ctx.prisma.ingredient.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyIngredient(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyIngredientArgs): Promise<BatchPayload> {
    return ctx.prisma.ingredient.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Ingredient, {
    nullable: false,
    description: undefined
  })
  async upsertIngredient(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertIngredientArgs): Promise<Ingredient> {
    return ctx.prisma.ingredient.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateIngredient, {
    nullable: false,
    description: undefined
  })
  async aggregateIngredient(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateIngredientArgs): Promise<AggregateIngredient> {
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

    return ctx.prisma.ingredient.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
