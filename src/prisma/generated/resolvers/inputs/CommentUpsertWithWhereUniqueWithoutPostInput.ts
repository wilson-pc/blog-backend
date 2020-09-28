import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { CommentCreateWithoutPostInput } from "../inputs/CommentCreateWithoutPostInput";
import { CommentUpdateWithoutPostDataInput } from "../inputs/CommentUpdateWithoutPostDataInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CommentUpsertWithWhereUniqueWithoutPostInput {
  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: CommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentUpdateWithoutPostDataInput, {
    nullable: false,
    description: undefined
  })
  update!: CommentUpdateWithoutPostDataInput;

  @TypeGraphQL.Field(_type => CommentCreateWithoutPostInput, {
    nullable: false,
    description: undefined
  })
  create!: CommentCreateWithoutPostInput;
}
