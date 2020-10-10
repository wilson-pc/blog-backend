import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { ImagenUpdateWithoutStepDataInput } from "../inputs/ImagenUpdateWithoutStepDataInput";
import { ImagenWhereUniqueInput } from "../inputs/ImagenWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ImagenUpdateWithWhereUniqueWithoutStepInput {
  @TypeGraphQL.Field(_type => ImagenWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: ImagenWhereUniqueInput;

  @TypeGraphQL.Field(_type => ImagenUpdateWithoutStepDataInput, {
    nullable: false,
    description: undefined
  })
  data!: ImagenUpdateWithoutStepDataInput;
}
