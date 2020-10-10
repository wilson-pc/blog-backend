import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { IngredientCreateManyWithoutRecipeInput } from "../inputs/IngredientCreateManyWithoutRecipeInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class RecipeCreateWithoutVideoInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  people?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => IngredientCreateManyWithoutRecipeInput, {
    nullable: true,
    description: undefined
  })
  ingredients?: IngredientCreateManyWithoutRecipeInput | undefined;
}
