import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { CategoryCreateWithoutPostsInput } from "../inputs/CategoryCreateWithoutPostsInput";
import { CategoryScalarWhereInput } from "../inputs/CategoryScalarWhereInput";
import { CategoryUpdateManyWithWhereNestedInput } from "../inputs/CategoryUpdateManyWithWhereNestedInput";
import { CategoryUpdateWithWhereUniqueWithoutPostsInput } from "../inputs/CategoryUpdateWithWhereUniqueWithoutPostsInput";
import { CategoryUpsertWithWhereUniqueWithoutPostsInput } from "../inputs/CategoryUpsertWithWhereUniqueWithoutPostsInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoryUpdateManyWithoutPostsInput {
  @TypeGraphQL.Field(_type => [CategoryCreateWithoutPostsInput], {
    nullable: true,
    description: undefined
  })
  create?: CategoryCreateWithoutPostsInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: CategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  set?: CategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  disconnect?: CategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  delete?: CategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryUpdateWithWhereUniqueWithoutPostsInput], {
    nullable: true,
    description: undefined
  })
  update?: CategoryUpdateWithWhereUniqueWithoutPostsInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryUpdateManyWithWhereNestedInput], {
    nullable: true,
    description: undefined
  })
  updateMany?: CategoryUpdateManyWithWhereNestedInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  deleteMany?: CategoryScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryUpsertWithWhereUniqueWithoutPostsInput], {
    nullable: true,
    description: undefined
  })
  upsert?: CategoryUpsertWithWhereUniqueWithoutPostsInput[] | undefined;
}
