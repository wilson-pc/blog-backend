import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { UserUpdateWithoutCommentsDataInput } from "../inputs/UserUpdateWithoutCommentsDataInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserUpdateWithWhereUniqueWithoutCommentsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserUpdateWithoutCommentsDataInput, {
    nullable: false,
    description: undefined
  })
  data!: UserUpdateWithoutCommentsDataInput;
}
