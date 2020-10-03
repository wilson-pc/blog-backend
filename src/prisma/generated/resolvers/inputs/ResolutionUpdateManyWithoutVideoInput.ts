import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { ResolutionCreateWithoutVideoInput } from "../inputs/ResolutionCreateWithoutVideoInput";
import { ResolutionScalarWhereInput } from "../inputs/ResolutionScalarWhereInput";
import { ResolutionUpdateManyWithWhereNestedInput } from "../inputs/ResolutionUpdateManyWithWhereNestedInput";
import { ResolutionUpdateWithWhereUniqueWithoutVideoInput } from "../inputs/ResolutionUpdateWithWhereUniqueWithoutVideoInput";
import { ResolutionUpsertWithWhereUniqueWithoutVideoInput } from "../inputs/ResolutionUpsertWithWhereUniqueWithoutVideoInput";
import { ResolutionWhereUniqueInput } from "../inputs/ResolutionWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ResolutionUpdateManyWithoutVideoInput {
  @TypeGraphQL.Field(_type => [ResolutionCreateWithoutVideoInput], {
    nullable: true,
    description: undefined
  })
  create?: ResolutionCreateWithoutVideoInput[] | undefined;

  @TypeGraphQL.Field(_type => [ResolutionWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: ResolutionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ResolutionWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  set?: ResolutionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ResolutionWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  disconnect?: ResolutionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ResolutionWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  delete?: ResolutionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ResolutionUpdateWithWhereUniqueWithoutVideoInput], {
    nullable: true,
    description: undefined
  })
  update?: ResolutionUpdateWithWhereUniqueWithoutVideoInput[] | undefined;

  @TypeGraphQL.Field(_type => [ResolutionUpdateManyWithWhereNestedInput], {
    nullable: true,
    description: undefined
  })
  updateMany?: ResolutionUpdateManyWithWhereNestedInput[] | undefined;

  @TypeGraphQL.Field(_type => [ResolutionScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  deleteMany?: ResolutionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ResolutionUpsertWithWhereUniqueWithoutVideoInput], {
    nullable: true,
    description: undefined
  })
  upsert?: ResolutionUpsertWithWhereUniqueWithoutVideoInput[] | undefined;
}
