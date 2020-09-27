import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { PostCreateWithoutCommentsInput } from "../inputs/PostCreateWithoutCommentsInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PostCreateOneWithoutCommentsInput {
  @TypeGraphQL.Field(_type => PostCreateWithoutCommentsInput, {
    nullable: true,
    description: undefined
  })
  create?: PostCreateWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: PostWhereUniqueInput | undefined;
}
