import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { StepWhereInput } from "../inputs/StepWhereInput";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ImagenWhereInput {
  @TypeGraphQL.Field(_type => [ImagenWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: ImagenWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ImagenWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: ImagenWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ImagenWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: ImagenWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  format?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StepWhereInput, {
    nullable: true,
    description: undefined
  })
  Step?: StepWhereInput | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true,
    description: undefined
  })
  stepId?: StringNullableFilter | undefined;
}
