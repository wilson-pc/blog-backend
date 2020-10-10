import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { ImagenCreateWithoutStepInput } from "../inputs/ImagenCreateWithoutStepInput";
import { ImagenUpdateWithoutStepDataInput } from "../inputs/ImagenUpdateWithoutStepDataInput";
import { ImagenWhereUniqueInput } from "../inputs/ImagenWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ImagenUpsertWithWhereUniqueWithoutStepInput {
  @TypeGraphQL.Field(_type => ImagenWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: ImagenWhereUniqueInput;

  @TypeGraphQL.Field(_type => ImagenUpdateWithoutStepDataInput, {
    nullable: false,
    description: undefined
  })
  update!: ImagenUpdateWithoutStepDataInput;

  @TypeGraphQL.Field(_type => ImagenCreateWithoutStepInput, {
    nullable: false,
    description: undefined
  })
  create!: ImagenCreateWithoutStepInput;
}
