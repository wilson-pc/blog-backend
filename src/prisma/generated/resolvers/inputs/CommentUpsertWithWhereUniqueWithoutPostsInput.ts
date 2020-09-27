import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { CommentCreateWithoutPostsInput } from "../inputs/CommentCreateWithoutPostsInput";
import { CommentUpdateWithoutPostsDataInput } from "../inputs/CommentUpdateWithoutPostsDataInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CommentUpsertWithWhereUniqueWithoutPostsInput {
  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: CommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentUpdateWithoutPostsDataInput, {
    nullable: false,
    description: undefined
  })
  update!: CommentUpdateWithoutPostsDataInput;

  @TypeGraphQL.Field(_type => CommentCreateWithoutPostsInput, {
    nullable: false,
    description: undefined
  })
  create!: CommentCreateWithoutPostsInput;
}
