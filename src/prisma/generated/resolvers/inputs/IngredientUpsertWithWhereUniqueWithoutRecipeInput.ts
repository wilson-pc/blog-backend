import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { IngredientCreateWithoutRecipeInput } from "../inputs/IngredientCreateWithoutRecipeInput";
import { IngredientUpdateWithoutRecipeDataInput } from "../inputs/IngredientUpdateWithoutRecipeDataInput";
import { IngredientWhereUniqueInput } from "../inputs/IngredientWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class IngredientUpsertWithWhereUniqueWithoutRecipeInput {
  @TypeGraphQL.Field(_type => IngredientWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: IngredientWhereUniqueInput;

  @TypeGraphQL.Field(_type => IngredientUpdateWithoutRecipeDataInput, {
    nullable: false,
    description: undefined
  })
  update!: IngredientUpdateWithoutRecipeDataInput;

  @TypeGraphQL.Field(_type => IngredientCreateWithoutRecipeInput, {
    nullable: false,
    description: undefined
  })
  create!: IngredientCreateWithoutRecipeInput;
}
