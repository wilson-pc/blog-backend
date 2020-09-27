import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { ProfileCreateWithoutUserInput } from "../inputs/ProfileCreateWithoutUserInput";
import { ProfileWhereUniqueInput } from "../inputs/ProfileWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProfileCreateOneWithoutUserInput {
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
}
