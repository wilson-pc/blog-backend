import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { UserCreateWithoutCommentsInput } from "../inputs/UserCreateWithoutCommentsInput";
import { UserUpdateWithoutCommentsDataInput } from "../inputs/UserUpdateWithoutCommentsDataInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserUpsertWithWhereUniqueWithoutCommentsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserUpdateWithoutCommentsDataInput, {
    nullable: false,
    description: undefined
  })
  update!: UserUpdateWithoutCommentsDataInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutCommentsInput, {
    nullable: false,
    description: undefined
  })
  create!: UserCreateWithoutCommentsInput;
}
