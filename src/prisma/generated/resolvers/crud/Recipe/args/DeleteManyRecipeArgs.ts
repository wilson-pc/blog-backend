import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { RecipeWhereInput } from "../../../inputs/RecipeWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyRecipeArgs {
  @TypeGraphQL.Field(_type => RecipeWhereInput, { nullable: true })
  where?: RecipeWhereInput | undefined;
}
