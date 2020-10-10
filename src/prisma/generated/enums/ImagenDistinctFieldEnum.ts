import * as TypeGraphQL from "type-graphql";

export enum ImagenDistinctFieldEnum {
  id = "id",
  name = "name",
  format = "format",
  stepId = "stepId"
}
TypeGraphQL.registerEnumType(ImagenDistinctFieldEnum, {
  name: "ImagenDistinctFieldEnum",
  description: undefined,
});
