import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { UserCreateWithoutCommentsInput } from "../inputs/UserCreateWithoutCommentsInput";
import { UserUpdateWithoutCommentsDataInput } from "../inputs/UserUpdateWithoutCommentsDataInput";
import { UserUpsertWithoutCommentsInput } from "../inputs/UserUpsertWithoutCommentsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserUpdateOneWithoutCommentsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutCommentsInput, {
    nullable: true,
    description: undefined
  })
  create?: UserCreateWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
    description: undefined
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
    description: undefined
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutCommentsDataInput, {
    nullable: true,
    description: undefined
  })
  update?: UserUpdateWithoutCommentsDataInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutCommentsInput, {
    nullable: true,
    description: undefined
  })
  upsert?: UserUpsertWithoutCommentsInput | undefined;
}
