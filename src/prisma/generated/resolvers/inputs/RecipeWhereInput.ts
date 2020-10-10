import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { IngredientListRelationFilter } from "../inputs/IngredientListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { VideoWhereInput } from "../inputs/VideoWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class RecipeWhereInput {
  @TypeGraphQL.Field(_type => [RecipeWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: RecipeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RecipeWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: RecipeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RecipeWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: RecipeWhereInput[] | undefined;

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
  people?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true,
    description: undefined
  })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => VideoWhereInput, {
    nullable: true,
    description: undefined
  })
  video?: VideoWhereInput | undefined;

  @TypeGraphQL.Field(_type => IngredientListRelationFilter, {
    nullable: true,
    description: undefined
  })
  ingredients?: IngredientListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true,
    description: undefined
  })
  videoId?: StringNullableFilter | undefined;
}
