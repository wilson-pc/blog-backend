import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { PostCreateOneWithoutCommentsInput } from "../inputs/PostCreateOneWithoutCommentsInput";
import { UserCreateManyWithoutCommentsInput } from "../inputs/UserCreateManyWithoutCommentsInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CommentCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  message?: string | undefined;

  @TypeGraphQL.Field(_type => PostCreateOneWithoutCommentsInput, {
    nullable: false,
    description: undefined
  })
  posts!: PostCreateOneWithoutCommentsInput;

  @TypeGraphQL.Field(_type => UserCreateManyWithoutCommentsInput, {
    nullable: true,
    description: undefined
  })
  users?: UserCreateManyWithoutCommentsInput | undefined;
}
