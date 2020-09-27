import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { CommentCreateWithoutUsersInput } from "../inputs/CommentCreateWithoutUsersInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CommentCreateManyWithoutUsersInput {
  @TypeGraphQL.Field(_type => [CommentCreateWithoutUsersInput], {
    nullable: true,
    description: undefined
  })
  create?: CommentCreateWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: CommentWhereUniqueInput[] | undefined;
}
