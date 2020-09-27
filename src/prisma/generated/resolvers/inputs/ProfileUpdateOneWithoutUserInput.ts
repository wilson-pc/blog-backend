import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { ProfileCreateWithoutUserInput } from "../inputs/ProfileCreateWithoutUserInput";
import { ProfileUpdateWithoutUserDataInput } from "../inputs/ProfileUpdateWithoutUserDataInput";
import { ProfileUpsertWithoutUserInput } from "../inputs/ProfileUpsertWithoutUserInput";
import { ProfileWhereUniqueInput } from "../inputs/ProfileWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProfileUpdateOneWithoutUserInput {
  @TypeGraphQL.Field(_type => ProfileCreateWithoutUserInput, {
    nullable: true,
    description: undefined
  })
  create?: ProfileCreateWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => ProfileWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: ProfileWhereUniqueInput | undefined;

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

  @TypeGraphQL.Field(_type => ProfileUpdateWithoutUserDataInput, {
    nullable: true,
    description: undefined
  })
  update?: ProfileUpdateWithoutUserDataInput | undefined;

  @TypeGraphQL.Field(_type => ProfileUpsertWithoutUserInput, {
    nullable: true,
    description: undefined
  })
  upsert?: ProfileUpsertWithoutUserInput | undefined;
}
