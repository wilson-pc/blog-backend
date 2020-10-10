import * as TypeGraphQL from "type-graphql";

export enum IngredientDistinctFieldEnum {
  id = "id",
  name = "name",
  recipeId = "recipeId"
}
TypeGraphQL.registerEnumType(IngredientDistinctFieldEnum, {
  name: "IngredientDistinctFieldEnum",
  description: undefined,
});
