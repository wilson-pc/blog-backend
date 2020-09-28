import * as TypeGraphQL from "type-graphql";

export enum CommentDistinctFieldEnum {
  id = "id",
  message = "message",
  createdAt = "createdAt",
  postId = "postId",
  userId = "userId"
}
TypeGraphQL.registerEnumType(CommentDistinctFieldEnum, {
  name: "CommentDistinctFieldEnum",
  description: undefined,
});
