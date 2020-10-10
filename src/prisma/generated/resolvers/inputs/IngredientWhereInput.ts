import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { RecipeWhereInput } from "../inputs/RecipeWhereInput";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class IngredientWhereInput {
  @TypeGraphQL.Field(_type => [IngredientWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: IngredientWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [IngredientWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: IngredientWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [IngredientWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: IngredientWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => RecipeWhereInput, {
    nullable: true,
    description: undefined
  })
  Recipe?: RecipeWhereInput | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true,
    description: undefined
  })
  recipeId?: StringNullableFilter | undefined;
}
