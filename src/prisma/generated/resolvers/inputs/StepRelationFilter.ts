import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { StepWhereInput } from "../inputs/StepWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class StepRelationFilter {
  @TypeGraphQL.Field(_type => StepWhereInput, {
    nullable: true,
    description: undefined
  })
  is?: StepWhereInput | undefined;

  @TypeGraphQL.Field(_type => StepWhereInput, {
    nullable: true,
    description: undefined
  })
  isNot?: StepWhereInput | undefined;
}
