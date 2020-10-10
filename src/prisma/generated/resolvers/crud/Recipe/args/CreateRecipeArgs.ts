import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { RecipeCreateInput } from "../../../inputs/RecipeCreateInput";

@TypeGraphQL.ArgsType()
export class CreateRecipeArgs {
  @TypeGraphQL.Field(_type => RecipeCreateInput, { nullable: false })
  data!: RecipeCreateInput;
}
