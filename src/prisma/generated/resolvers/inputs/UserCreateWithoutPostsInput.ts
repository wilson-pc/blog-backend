import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { CommentCreateManyWithoutUserInput } from "../inputs/CommentCreateManyWithoutUserInput";
import { ProfileCreateOneWithoutUserInput } from "../inputs/ProfileCreateOneWithoutUserInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserCreateWithoutPostsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  password!: string;

  @TypeGraphQL.Field(_type => CommentCreateManyWithoutUserInput, {
    nullable: true,
    description: undefined
  })
  comments?: CommentCreateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => ProfileCreateOneWithoutUserInput, {
    nullable: true,
    description: undefined
  })
  profile?: ProfileCreateOneWithoutUserInput | undefined;
}
