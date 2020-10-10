import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { IngredientCreateWithoutRecipeInput } from "../inputs/IngredientCreateWithoutRecipeInput";
import { IngredientWhereUniqueInput } from "../inputs/IngredientWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class IngredientCreateManyWithoutRecipeInput {
  @TypeGraphQL.Field(_type => [IngredientCreateWithoutRecipeInput], {
    nullable: true,
    description: undefined
  })
  create?: IngredientCreateWithoutRecipeInput[] | undefined;

  @TypeGraphQL.Field(_type => [IngredientWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: IngredientWhereUniqueInput[] | undefined;
}
