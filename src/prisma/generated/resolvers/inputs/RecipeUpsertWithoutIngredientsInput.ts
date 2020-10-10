import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { RecipeCreateWithoutIngredientsInput } from "../inputs/RecipeCreateWithoutIngredientsInput";
import { RecipeUpdateWithoutIngredientsDataInput } from "../inputs/RecipeUpdateWithoutIngredientsDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class RecipeUpsertWithoutIngredientsInput {
  @TypeGraphQL.Field(_type => RecipeUpdateWithoutIngredientsDataInput, {
    nullable: false,
    description: undefined
  })
  update!: RecipeUpdateWithoutIngredientsDataInput;

  @TypeGraphQL.Field(_type => RecipeCreateWithoutIngredientsInput, {
    nullable: false,
    description: undefined
  })
  create!: RecipeCreateWithoutIngredientsInput;
}
