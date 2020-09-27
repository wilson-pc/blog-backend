import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { UserCreateWithoutCommentsInput } from "../inputs/UserCreateWithoutCommentsInput";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyWithWhereNestedInput } from "../inputs/UserUpdateManyWithWhereNestedInput";
import { UserUpdateWithWhereUniqueWithoutCommentsInput } from "../inputs/UserUpdateWithWhereUniqueWithoutCommentsInput";
import { UserUpsertWithWhereUniqueWithoutCommentsInput } from "../inputs/UserUpsertWithWhereUniqueWithoutCommentsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserUpdateManyWithoutCommentsInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutCommentsInput], {
    nullable: true,
    description: undefined
  })
  create?: UserCreateWithoutCommentsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  set?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  disconnect?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  delete?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateWithWhereUniqueWithoutCommentsInput], {
    nullable: true,
    description: undefined
  })
  update?: UserUpdateWithWhereUniqueWithoutCommentsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateManyWithWhereNestedInput], {
    nullable: true,
    description: undefined
  })
  updateMany?: UserUpdateManyWithWhereNestedInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  deleteMany?: UserScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpsertWithWhereUniqueWithoutCommentsInput], {
    nullable: true,
    description: undefined
  })
  upsert?: UserUpsertWithWhereUniqueWithoutCommentsInput[] | undefined;
}
