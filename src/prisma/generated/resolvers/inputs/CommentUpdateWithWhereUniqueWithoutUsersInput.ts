import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { CommentUpdateWithoutUsersDataInput } from "../inputs/CommentUpdateWithoutUsersDataInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CommentUpdateWithWhereUniqueWithoutUsersInput {
  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: CommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentUpdateWithoutUsersDataInput, {
    nullable: false,
    description: undefined
  })
  data!: CommentUpdateWithoutUsersDataInput;
}
