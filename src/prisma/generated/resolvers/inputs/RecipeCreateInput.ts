import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { IngredientCreateManyWithoutRecipeInput } from "../inputs/IngredientCreateManyWithoutRecipeInput";
import { VideoCreateOneWithoutRecipeInput } from "../inputs/VideoCreateOneWithoutRecipeInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class RecipeCreateInput {
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

  @TypeGraphQL.Field(_type => VideoCreateOneWithoutRecipeInput, {
    nullable: true,
    description: undefined
  })
  video?: VideoCreateOneWithoutRecipeInput | undefined;

  @TypeGraphQL.Field(_type => IngredientCreateManyWithoutRecipeInput, {
    nullable: true,
    description: undefined
  })
  ingredients?: IngredientCreateManyWithoutRecipeInput | undefined;
}
