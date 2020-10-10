import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class IngredientScalarWhereInput {
  @TypeGraphQL.Field(_type => [IngredientScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: IngredientScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [IngredientScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: IngredientScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [IngredientScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: IngredientScalarWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true,
    description: undefined
  })
  recipeId?: StringNullableFilter | undefined;
}
