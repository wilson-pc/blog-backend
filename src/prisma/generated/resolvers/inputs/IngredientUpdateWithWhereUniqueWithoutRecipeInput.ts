import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { IngredientUpdateWithoutRecipeDataInput } from "../inputs/IngredientUpdateWithoutRecipeDataInput";
import { IngredientWhereUniqueInput } from "../inputs/IngredientWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class IngredientUpdateWithWhereUniqueWithoutRecipeInput {
  @TypeGraphQL.Field(_type => IngredientWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: IngredientWhereUniqueInput;

  @TypeGraphQL.Field(_type => IngredientUpdateWithoutRecipeDataInput, {
    nullable: false,
    description: undefined
  })
  data!: IngredientUpdateWithoutRecipeDataInput;
}
