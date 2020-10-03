import * as TypeGraphQL from "type-graphql";

export enum ImagenDistinctFieldEnum {
  id = "id",
  name = "name",
  format = "format"
}
TypeGraphQL.registerEnumType(ImagenDistinctFieldEnum, {
  name: "ImagenDistinctFieldEnum",
  description: undefined,
});
