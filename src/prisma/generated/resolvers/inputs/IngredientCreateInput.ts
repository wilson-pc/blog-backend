import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { RecipeCreateOneWithoutIngredientsInput } from "../inputs/RecipeCreateOneWithoutIngredientsInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class IngredientCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  name!: string;

  @TypeGraphQL.Field(_type => RecipeCreateOneWithoutIngredientsInput, {
    nullable: true,
    description: undefined
  })
  Recipe?: RecipeCreateOneWithoutIngredientsInput | undefined;
}
