import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { RecipeUpdateInput } from "../../../inputs/RecipeUpdateInput";
import { RecipeWhereUniqueInput } from "../../../inputs/RecipeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateRecipeArgs {
  @TypeGraphQL.Field(_type => RecipeUpdateInput, { nullable: false })
  data!: RecipeUpdateInput;

  @TypeGraphQL.Field(_type => RecipeWhereUniqueInput, { nullable: false })
  where!: RecipeWhereUniqueInput;
}
