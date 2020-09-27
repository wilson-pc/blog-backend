import * as TypeGraphQL from "type-graphql";

export enum CategoryDistinctFieldEnum {
  id = "id",
  name = "name"
}
TypeGraphQL.registerEnumType(CategoryDistinctFieldEnum, {
  name: "CategoryDistinctFieldEnum",
  description: undefined,
});
