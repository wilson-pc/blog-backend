import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ImagenScalarWhereInput {
  @TypeGraphQL.Field(_type => [ImagenScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: ImagenScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ImagenScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: ImagenScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ImagenScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: ImagenScalarWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true,
    description: undefined
  })
  stepId?: StringNullableFilter | undefined;
}
