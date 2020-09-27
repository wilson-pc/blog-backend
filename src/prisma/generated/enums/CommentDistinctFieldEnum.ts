import * as TypeGraphQL from "type-graphql";

export enum CommentDistinctFieldEnum {
  id = "id",
  message = "message",
  postId = "postId"
}
TypeGraphQL.registerEnumType(CommentDistinctFieldEnum, {
  name: "CommentDistinctFieldEnum",
  description: undefined,
});
