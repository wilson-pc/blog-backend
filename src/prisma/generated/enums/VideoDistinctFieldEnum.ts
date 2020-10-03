import * as TypeGraphQL from "type-graphql";

export enum VideoDistinctFieldEnum {
  id = "id",
  name = "name",
  format = "format",
  hls = "hls"
}
TypeGraphQL.registerEnumType(VideoDistinctFieldEnum, {
  name: "VideoDistinctFieldEnum",
  description: undefined,
});
