import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { CommentCreateWithoutUserInput } from "../inputs/CommentCreateWithoutUserInput";
import { CommentUpdateWithoutUserDataInput } from "../inputs/CommentUpdateWithoutUserDataInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CommentUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: CommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentUpdateWithoutUserDataInput, {
    nullable: false,
    description: undefined
  })
  update!: CommentUpdateWithoutUserDataInput;

  @TypeGraphQL.Field(_type => CommentCreateWithoutUserInput, {
    nullable: false,
    description: undefined
  })
  create!: CommentCreateWithoutUserInput;
}
