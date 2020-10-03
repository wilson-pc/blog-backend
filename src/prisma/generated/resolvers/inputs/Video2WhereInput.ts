import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { BoolFilter } from "../inputs/BoolFilter";
import { ResolutionListRelationFilter } from "../inputs/ResolutionListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class Video2WhereInput {
  @TypeGraphQL.Field(_type => [Video2WhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: Video2WhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Video2WhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: Video2WhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Video2WhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: Video2WhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true,
    description: undefined
  })
  web?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => ResolutionListRelationFilter, {
    nullable: true,
    description: undefined
  })
  resolutions?: ResolutionListRelationFilter | undefined;
}
