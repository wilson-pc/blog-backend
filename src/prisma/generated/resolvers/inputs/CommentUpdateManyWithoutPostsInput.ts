import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { CommentCreateWithoutPostsInput } from "../inputs/CommentCreateWithoutPostsInput";
import { CommentScalarWhereInput } from "../inputs/CommentScalarWhereInput";
import { CommentUpdateManyWithWhereNestedInput } from "../inputs/CommentUpdateManyWithWhereNestedInput";
import { CommentUpdateWithWhereUniqueWithoutPostsInput } from "../inputs/CommentUpdateWithWhereUniqueWithoutPostsInput";
import { CommentUpsertWithWhereUniqueWithoutPostsInput } from "../inputs/CommentUpsertWithWhereUniqueWithoutPostsInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CommentUpdateManyWithoutPostsInput {
  @TypeGraphQL.Field(_type => [CommentCreateWithoutPostsInput], {
    nullable: true,
    description: undefined
  })
  create?: CommentCreateWithoutPostsInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  set?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  disconnect?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  delete?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpdateWithWhereUniqueWithoutPostsInput], {
    nullable: true,
    description: undefined
  })
  update?: CommentUpdateWithWhereUniqueWithoutPostsInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpdateManyWithWhereNestedInput], {
    nullable: true,
    description: undefined
  })
  updateMany?: CommentUpdateManyWithWhereNestedInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  deleteMany?: CommentScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpsertWithWhereUniqueWithoutPostsInput], {
    nullable: true,
    description: undefined
  })
  upsert?: CommentUpsertWithWhereUniqueWithoutPostsInput[] | undefined;
}
