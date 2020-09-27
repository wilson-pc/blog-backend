import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { CommentCreateWithoutUsersInput } from "../inputs/CommentCreateWithoutUsersInput";
import { CommentUpdateWithoutUsersDataInput } from "../inputs/CommentUpdateWithoutUsersDataInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CommentUpsertWithWhereUniqueWithoutUsersInput {
  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: CommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentUpdateWithoutUsersDataInput, {
    nullable: false,
    description: undefined
  })
  update!: CommentUpdateWithoutUsersDataInput;

  @TypeGraphQL.Field(_type => CommentCreateWithoutUsersInput, {
    nullable: false,
    description: undefined
  })
  create!: CommentCreateWithoutUsersInput;
}
