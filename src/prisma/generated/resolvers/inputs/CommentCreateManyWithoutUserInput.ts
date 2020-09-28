import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { CommentCreateWithoutUserInput } from "../inputs/CommentCreateWithoutUserInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CommentCreateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [CommentCreateWithoutUserInput], {
    nullable: true,
    description: undefined
  })
  create?: CommentCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: CommentWhereUniqueInput[] | undefined;
}
