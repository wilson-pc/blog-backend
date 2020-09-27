import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { CommentCreateWithoutUsersInput } from "../inputs/CommentCreateWithoutUsersInput";
import { CommentScalarWhereInput } from "../inputs/CommentScalarWhereInput";
import { CommentUpdateManyWithWhereNestedInput } from "../inputs/CommentUpdateManyWithWhereNestedInput";
import { CommentUpdateWithWhereUniqueWithoutUsersInput } from "../inputs/CommentUpdateWithWhereUniqueWithoutUsersInput";
import { CommentUpsertWithWhereUniqueWithoutUsersInput } from "../inputs/CommentUpsertWithWhereUniqueWithoutUsersInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CommentUpdateManyWithoutUsersInput {
  @TypeGraphQL.Field(_type => [CommentCreateWithoutUsersInput], {
    nullable: true,
    description: undefined
  })
  create?: CommentCreateWithoutUsersInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [CommentUpdateWithWhereUniqueWithoutUsersInput], {
    nullable: true,
    description: undefined
  })
  update?: CommentUpdateWithWhereUniqueWithoutUsersInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [CommentUpsertWithWhereUniqueWithoutUsersInput], {
    nullable: true,
    description: undefined
  })
  upsert?: CommentUpsertWithWhereUniqueWithoutUsersInput[] | undefined;
}
