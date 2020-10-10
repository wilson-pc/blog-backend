import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { IngredientCreateInput } from "../../../inputs/IngredientCreateInput";

@TypeGraphQL.ArgsType()
export class CreateIngredientArgs {
  @TypeGraphQL.Field(_type => IngredientCreateInput, { nullable: false })
  data!: IngredientCreateInput;
}
