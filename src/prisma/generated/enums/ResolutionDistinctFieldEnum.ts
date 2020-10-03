import * as TypeGraphQL from "type-graphql";

export enum ResolutionDistinctFieldEnum {
  id = "id",
  name = "name",
  videoId = "videoId"
}
TypeGraphQL.registerEnumType(ResolutionDistinctFieldEnum, {
  name: "ResolutionDistinctFieldEnum",
  description: undefined,
});
