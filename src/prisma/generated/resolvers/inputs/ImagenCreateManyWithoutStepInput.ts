import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { ImagenCreateWithoutStepInput } from "../inputs/ImagenCreateWithoutStepInput";
import { ImagenWhereUniqueInput } from "../inputs/ImagenWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ImagenCreateManyWithoutStepInput {
  @TypeGraphQL.Field(_type => [ImagenCreateWithoutStepInput], {
    nullable: true,
    description: undefined
  })
  create?: ImagenCreateWithoutStepInput[] | undefined;

  @TypeGraphQL.Field(_type => [ImagenWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: ImagenWhereUniqueInput[] | undefined;
}
