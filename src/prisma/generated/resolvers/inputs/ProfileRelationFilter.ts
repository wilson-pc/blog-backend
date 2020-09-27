import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { ProfileWhereInput } from "../inputs/ProfileWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProfileRelationFilter {
  @TypeGraphQL.Field(_type => ProfileWhereInput, {
    nullable: true,
    description: undefined
  })
  is?: ProfileWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProfileWhereInput, {
    nullable: true,
    description: undefined
  })
  isNot?: ProfileWhereInput | undefined;
}
