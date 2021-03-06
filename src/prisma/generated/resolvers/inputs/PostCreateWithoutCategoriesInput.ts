import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { CommentCreateManyWithoutPostInput } from "../inputs/CommentCreateManyWithoutPostInput";
import { UserCreateOneWithoutPostsInput } from "../inputs/UserCreateOneWithoutPostsInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PostCreateWithoutCategoriesInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  content!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
    description: undefined
  })
  published?: boolean | undefined;

  @TypeGraphQL.Field(_type => UserCreateOneWithoutPostsInput, {
    nullable: false,
    description: undefined
  })
  author!: UserCreateOneWithoutPostsInput;

  @TypeGraphQL.Field(_type => CommentCreateManyWithoutPostInput, {
    nullable: true,
    description: undefined
  })
  comments?: CommentCreateManyWithoutPostInput | undefined;
}
