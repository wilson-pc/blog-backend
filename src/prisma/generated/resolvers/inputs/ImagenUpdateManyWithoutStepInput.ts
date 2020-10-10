import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { ImagenCreateWithoutStepInput } from "../inputs/ImagenCreateWithoutStepInput";
import { ImagenScalarWhereInput } from "../inputs/ImagenScalarWhereInput";
import { ImagenUpdateManyWithWhereNestedInput } from "../inputs/ImagenUpdateManyWithWhereNestedInput";
import { ImagenUpdateWithWhereUniqueWithoutStepInput } from "../inputs/ImagenUpdateWithWhereUniqueWithoutStepInput";
import { ImagenUpsertWithWhereUniqueWithoutStepInput } from "../inputs/ImagenUpsertWithWhereUniqueWithoutStepInput";
import { ImagenWhereUniqueInput } from "../inputs/ImagenWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ImagenUpdateManyWithoutStepInput {
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

  @TypeGraphQL.Field(_type => [ImagenWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  set?: ImagenWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ImagenWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  disconnect?: ImagenWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ImagenWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  delete?: ImagenWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ImagenUpdateWithWhereUniqueWithoutStepInput], {
    nullable: true,
    description: undefined
  })
  update?: ImagenUpdateWithWhereUniqueWithoutStepInput[] | undefined;

  @TypeGraphQL.Field(_type => [ImagenUpdateManyWithWhereNestedInput], {
    nullable: true,
    description: undefined
  })
  updateMany?: ImagenUpdateManyWithWhereNestedInput[] | undefined;

  @TypeGraphQL.Field(_type => [ImagenScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  deleteMany?: ImagenScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ImagenUpsertWithWhereUniqueWithoutStepInput], {
    nullable: true,
    description: undefined
  })
  upsert?: ImagenUpsertWithWhereUniqueWithoutStepInput[] | undefined;
}
