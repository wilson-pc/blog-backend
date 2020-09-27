import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { CategoryCreateWithoutPostsInput } from "../inputs/CategoryCreateWithoutPostsInput";
import { CategoryUpdateWithoutPostsDataInput } from "../inputs/CategoryUpdateWithoutPostsDataInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoryUpsertWithWhereUniqueWithoutPostsInput {
  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: CategoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => CategoryUpdateWithoutPostsDataInput, {
    nullable: false,
    description: undefined
  })
  update!: CategoryUpdateWithoutPostsDataInput;

  @TypeGraphQL.Field(_type => CategoryCreateWithoutPostsInput, {
    nullable: false,
    description: undefined
  })
  create!: CategoryCreateWithoutPostsInput;
}
