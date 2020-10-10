import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { StepCreateWithoutImagesInput } from "../inputs/StepCreateWithoutImagesInput";
import { StepUpdateWithoutImagesDataInput } from "../inputs/StepUpdateWithoutImagesDataInput";
import { StepUpsertWithoutImagesInput } from "../inputs/StepUpsertWithoutImagesInput";
import { StepWhereUniqueInput } from "../inputs/StepWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class StepUpdateOneWithoutImagesInput {
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

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
    description: undefined
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
    description: undefined
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => StepUpdateWithoutImagesDataInput, {
    nullable: true,
    description: undefined
  })
  update?: StepUpdateWithoutImagesDataInput | undefined;

  @TypeGraphQL.Field(_type => StepUpsertWithoutImagesInput, {
    nullable: true,
    description: undefined
  })
  upsert?: StepUpsertWithoutImagesInput | undefined;
}
