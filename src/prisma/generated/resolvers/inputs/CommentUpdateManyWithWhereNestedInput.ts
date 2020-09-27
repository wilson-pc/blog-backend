import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { CommentScalarWhereInput } from "../inputs/CommentScalarWhereInput";
import { CommentUpdateManyDataInput } from "../inputs/CommentUpdateManyDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CommentUpdateManyWithWhereNestedInput {
  @TypeGraphQL.Field(_type => CommentScalarWhereInput, {
    nullable: false,
    description: undefined
  })
  where!: CommentScalarWhereInput;

  @TypeGraphQL.Field(_type => CommentUpdateManyDataInput, {
    nullable: false,
    description: undefined
  })
  data!: CommentUpdateManyDataInput;
}
