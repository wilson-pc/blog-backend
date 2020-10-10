import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { RecipeCreateWithoutIngredientsInput } from "../inputs/RecipeCreateWithoutIngredientsInput";
import { RecipeWhereUniqueInput } from "../inputs/RecipeWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class RecipeCreateOneWithoutIngredientsInput {
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
}
