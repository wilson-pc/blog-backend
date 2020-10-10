import * as TypeGraphQL from "type-graphql";

export enum StepDistinctFieldEnum {
  id = "id",
  name = "name"
}
TypeGraphQL.registerEnumType(StepDistinctFieldEnum, {
  name: "StepDistinctFieldEnum",
  description: undefined,
});
