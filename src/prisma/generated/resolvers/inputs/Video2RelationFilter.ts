import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { Video2WhereInput } from "../inputs/Video2WhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class Video2RelationFilter {
  @TypeGraphQL.Field(_type => Video2WhereInput, {
    nullable: true,
    description: undefined
  })
  is?: Video2WhereInput | undefined;

  @TypeGraphQL.Field(_type => Video2WhereInput, {
    nullable: true,
    description: undefined
  })
  isNot?: Video2WhereInput | undefined;
}
