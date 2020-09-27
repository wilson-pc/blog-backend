import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { UserCreateWithoutProfileInput } from "../inputs/UserCreateWithoutProfileInput";
import { UserUpdateWithoutProfileDataInput } from "../inputs/UserUpdateWithoutProfileDataInput";
import { UserUpsertWithoutProfileInput } from "../inputs/UserUpsertWithoutProfileInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserUpdateOneRequiredWithoutProfileInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutProfileInput, {
    nullable: true,
    description: undefined
  })
  create?: UserCreateWithoutProfileInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutProfileDataInput, {
    nullable: true,
    description: undefined
  })
  update?: UserUpdateWithoutProfileDataInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutProfileInput, {
    nullable: true,
    description: undefined
  })
  upsert?: UserUpsertWithoutProfileInput | undefined;
}
