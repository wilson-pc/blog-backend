import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ResolutionScalarWhereInput {
  @TypeGraphQL.Field(_type => [ResolutionScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: ResolutionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ResolutionScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: ResolutionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ResolutionScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: ResolutionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  videoId?: StringFilter | undefined;
}
