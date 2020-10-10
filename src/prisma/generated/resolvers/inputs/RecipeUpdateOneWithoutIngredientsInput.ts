import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { RecipeCreateWithoutIngredientsInput } from "../inputs/RecipeCreateWithoutIngredientsInput";
import { RecipeUpdateWithoutIngredientsDataInput } from "../inputs/RecipeUpdateWithoutIngredientsDataInput";
import { RecipeUpsertWithoutIngredientsInput } from "../inputs/RecipeUpsertWithoutIngredientsInput";
import { RecipeWhereUniqueInput } from "../inputs/RecipeWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class RecipeUpdateOneWithoutIngredientsInput {
  @TypeGraphQL.Field(_type => RecipeCreateWithoutIngredientsInput, {
    nullable: true,
    description: undefined
  })
  create?: RecipeCreateWithoutIngredientsInput | undefined;

  @TypeGraphQL.Field(_type => RecipeWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: RecipeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
    description: undefined
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
    description: undefined
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => RecipeUpdateWithoutIngredientsDataInput, {
    nullable: true,
    description: undefined
  })
  update?: RecipeUpdateWithoutIngredientsDataInput | undefined;

  @TypeGraphQL.Field(_type => RecipeUpsertWithoutIngredientsInput, {
    nullable: true,
    description: undefined
  })
  upsert?: RecipeUpsertWithoutIngredientsInput | undefined;
}
