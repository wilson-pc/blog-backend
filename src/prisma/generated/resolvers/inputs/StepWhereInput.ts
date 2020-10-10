import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { ImagenListRelationFilter } from "../inputs/ImagenListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class StepWhereInput {
  @TypeGraphQL.Field(_type => [StepWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: StepWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StepWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: StepWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StepWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: StepWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => ImagenListRelationFilter, {
    nullable: true,
    description: undefined
  })
  images?: ImagenListRelationFilter | undefined;
}
