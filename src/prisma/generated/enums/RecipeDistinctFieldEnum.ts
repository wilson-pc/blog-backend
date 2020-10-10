import * as TypeGraphQL from "type-graphql";

export enum RecipeDistinctFieldEnum {
  id = "id",
  name = "name",
  people = "people",
  description = "description",
  videoId = "videoId"
}
TypeGraphQL.registerEnumType(RecipeDistinctFieldEnum, {
  name: "RecipeDistinctFieldEnum",
  description: undefined,
});
