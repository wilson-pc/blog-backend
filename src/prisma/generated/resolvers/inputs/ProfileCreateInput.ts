import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { UserCreateOneWithoutProfileInput } from "../inputs/UserCreateOneWithoutProfileInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProfileCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  bio!: string;

  @TypeGraphQL.Field(_type => UserCreateOneWithoutProfileInput, {
    nullable: false,
    description: undefined
  })
  user!: UserCreateOneWithoutProfileInput;
}
