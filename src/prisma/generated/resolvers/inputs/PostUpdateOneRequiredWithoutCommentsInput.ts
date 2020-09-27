import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { PostCreateWithoutCommentsInput } from "../inputs/PostCreateWithoutCommentsInput";
import { PostUpdateWithoutCommentsDataInput } from "../inputs/PostUpdateWithoutCommentsDataInput";
import { PostUpsertWithoutCommentsInput } from "../inputs/PostUpsertWithoutCommentsInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PostUpdateOneRequiredWithoutCommentsInput {
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

  @TypeGraphQL.Field(_type => PostUpdateWithoutCommentsDataInput, {
    nullable: true,
    description: undefined
  })
  update?: PostUpdateWithoutCommentsDataInput | undefined;

  @TypeGraphQL.Field(_type => PostUpsertWithoutCommentsInput, {
    nullable: true,
    description: undefined
  })
  upsert?: PostUpsertWithoutCommentsInput | undefined;
}
