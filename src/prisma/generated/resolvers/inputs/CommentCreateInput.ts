import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { PostCreateOneWithoutCommentsInput } from "../inputs/PostCreateOneWithoutCommentsInput";
import { UserCreateOneWithoutCommentsInput } from "../inputs/UserCreateOneWithoutCommentsInput";

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

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => PostCreateOneWithoutCommentsInput, {
    nullable: false,
    description: undefined
  })
  post!: PostCreateOneWithoutCommentsInput;

  @TypeGraphQL.Field(_type => UserCreateOneWithoutCommentsInput, {
    nullable: true,
    description: undefined
  })
  user?: UserCreateOneWithoutCommentsInput | undefined;
}
