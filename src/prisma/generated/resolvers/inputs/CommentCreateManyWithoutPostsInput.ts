import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { CommentCreateWithoutPostsInput } from "../inputs/CommentCreateWithoutPostsInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CommentCreateManyWithoutPostsInput {
  @TypeGraphQL.Field(_type => [CommentCreateWithoutPostsInput], {
    nullable: true,
    description: undefined
  })
  create?: CommentCreateWithoutPostsInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: CommentWhereUniqueInput[] | undefined;
}
