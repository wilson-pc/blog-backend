import * as TypeGraphQL from "type-graphql";

export enum ProfileDistinctFieldEnum {
  id = "id",
  bio = "bio",
  userId = "userId"
}
TypeGraphQL.registerEnumType(ProfileDistinctFieldEnum, {
  name: "ProfileDistinctFieldEnum",
  description: undefined,
});
