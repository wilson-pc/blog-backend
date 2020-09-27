import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { UserCreateWithoutProfileInput } from "../inputs/UserCreateWithoutProfileInput";
import { UserUpdateWithoutProfileDataInput } from "../inputs/UserUpdateWithoutProfileDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserUpsertWithoutProfileInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutProfileDataInput, {
    nullable: false,
    description: undefined
  })
  update!: UserUpdateWithoutProfileDataInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutProfileInput, {
    nullable: false,
    description: undefined
  })
  create!: UserCreateWithoutProfileInput;
}
