import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { CommentCreateWithoutPostInput } from "../inputs/CommentCreateWithoutPostInput";
import { CommentScalarWhereInput } from "../inputs/CommentScalarWhereInput";
import { CommentUpdateManyWithWhereNestedInput } from "../inputs/CommentUpdateManyWithWhereNestedInput";
import { CommentUpdateWithWhereUniqueWithoutPostInput } from "../inputs/CommentUpdateWithWhereUniqueWithoutPostInput";
import { CommentUpsertWithWhereUniqueWithoutPostInput } from "../inputs/CommentUpsertWithWhereUniqueWithoutPostInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CommentUpdateManyWithoutPostInput {
  @TypeGraphQL.Field(_type => [CommentCreateWithoutPostInput], {
    nullable: true,
    description: undefined
  })
  create?: CommentCreateWithoutPostInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [CommentUpdateWithWhereUniqueWithoutPostInput], {
    nullable: true,
    description: undefined
  })
  update?: CommentUpdateWithWhereUniqueWithoutPostInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [CommentUpsertWithWhereUniqueWithoutPostInput], {
    nullable: true,
    description: undefined
  })
  upsert?: CommentUpsertWithWhereUniqueWithoutPostInput[] | undefined;
}
