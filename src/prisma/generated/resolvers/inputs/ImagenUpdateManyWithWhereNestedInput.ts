import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { ImagenScalarWhereInput } from "../inputs/ImagenScalarWhereInput";
import { ImagenUpdateManyDataInput } from "../inputs/ImagenUpdateManyDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ImagenUpdateManyWithWhereNestedInput {
  @TypeGraphQL.Field(_type => ImagenScalarWhereInput, {
    nullable: false,
    description: undefined
  })
  where!: ImagenScalarWhereInput;

  @TypeGraphQL.Field(_type => ImagenUpdateManyDataInput, {
    nullable: false,
    description: undefined
  })
  data!: ImagenUpdateManyDataInput;
}
