import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { PostCreateWithoutCommentsInput } from "../inputs/PostCreateWithoutCommentsInput";
import { PostUpdateWithoutCommentsDataInput } from "../inputs/PostUpdateWithoutCommentsDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PostUpsertWithoutCommentsInput {
  @TypeGraphQL.Field(_type => PostUpdateWithoutCommentsDataInput, {
    nullable: false,
    description: undefined
  })
  update!: PostUpdateWithoutCommentsDataInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutCommentsInput, {
    nullable: false,
    description: undefined
  })
  create!: PostCreateWithoutCommentsInput;
}
