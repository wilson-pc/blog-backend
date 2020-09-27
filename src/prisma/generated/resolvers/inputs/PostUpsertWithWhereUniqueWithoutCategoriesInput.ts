import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { PostCreateWithoutCategoriesInput } from "../inputs/PostCreateWithoutCategoriesInput";
import { PostUpdateWithoutCategoriesDataInput } from "../inputs/PostUpdateWithoutCategoriesDataInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PostUpsertWithWhereUniqueWithoutCategoriesInput {
  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: PostWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostUpdateWithoutCategoriesDataInput, {
    nullable: false,
    description: undefined
  })
  update!: PostUpdateWithoutCategoriesDataInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutCategoriesInput, {
    nullable: false,
    description: undefined
  })
  create!: PostCreateWithoutCategoriesInput;
}
