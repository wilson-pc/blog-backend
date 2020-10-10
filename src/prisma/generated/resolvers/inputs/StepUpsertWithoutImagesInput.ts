import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { StepCreateWithoutImagesInput } from "../inputs/StepCreateWithoutImagesInput";
import { StepUpdateWithoutImagesDataInput } from "../inputs/StepUpdateWithoutImagesDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class StepUpsertWithoutImagesInput {
  @TypeGraphQL.Field(_type => StepUpdateWithoutImagesDataInput, {
    nullable: false,
    description: undefined
  })
  update!: StepUpdateWithoutImagesDataInput;

  @TypeGraphQL.Field(_type => StepCreateWithoutImagesInput, {
    nullable: false,
    description: undefined
  })
  create!: StepCreateWithoutImagesInput;
}
