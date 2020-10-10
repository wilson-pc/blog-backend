import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { StepCreateOneWithoutImagesInput } from "../inputs/StepCreateOneWithoutImagesInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ImagenCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  format!: string;

  @TypeGraphQL.Field(_type => StepCreateOneWithoutImagesInput, {
    nullable: true,
    description: undefined
  })
  Step?: StepCreateOneWithoutImagesInput | undefined;
}
