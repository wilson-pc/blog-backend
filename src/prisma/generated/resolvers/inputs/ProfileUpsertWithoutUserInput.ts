import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { ProfileCreateWithoutUserInput } from "../inputs/ProfileCreateWithoutUserInput";
import { ProfileUpdateWithoutUserDataInput } from "../inputs/ProfileUpdateWithoutUserDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProfileUpsertWithoutUserInput {
  @TypeGraphQL.Field(_type => ProfileUpdateWithoutUserDataInput, {
    nullable: false,
    description: undefined
  })
  update!: ProfileUpdateWithoutUserDataInput;

  @TypeGraphQL.Field(_type => ProfileCreateWithoutUserInput, {
    nullable: false,
    description: undefined
  })
  create!: ProfileCreateWithoutUserInput;
}
