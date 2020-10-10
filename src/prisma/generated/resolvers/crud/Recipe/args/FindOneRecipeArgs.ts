import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { RecipeWhereUniqueInput } from "../../../inputs/RecipeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindOneRecipeArgs {
  @TypeGraphQL.Field(_type => RecipeWhereUniqueInput, { nullable: false })
  where!: RecipeWhereUniqueInput;
}