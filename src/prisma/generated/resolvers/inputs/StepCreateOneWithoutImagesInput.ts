import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { StepCreateWithoutImagesInput } from "../inputs/StepCreateWithoutImagesInput";
import { StepWhereUniqueInput } from "../inputs/StepWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class StepCreateOneWithoutImagesInput {
  @TypeGraphQL.Field(_type => StepCreateWithoutImagesInput, {
    nullable: true,
    description: undefined
  })
  create?: StepCreateWithoutImagesInput | undefined;

  @TypeGraphQL.Field(_type => StepWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: StepWhereUniqueInput | undefined;
}
