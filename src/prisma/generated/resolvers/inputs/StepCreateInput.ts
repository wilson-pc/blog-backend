import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { ImagenCreateManyWithoutStepInput } from "../inputs/ImagenCreateManyWithoutStepInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class StepCreateInput {
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

  @TypeGraphQL.Field(_type => ImagenCreateManyWithoutStepInput, {
    nullable: true,
    description: undefined
  })
  images?: ImagenCreateManyWithoutStepInput | undefined;
}
