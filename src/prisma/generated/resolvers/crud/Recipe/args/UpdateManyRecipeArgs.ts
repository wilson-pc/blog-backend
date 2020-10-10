import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { RecipeUpdateManyMutationInput } from "../../../inputs/RecipeUpdateManyMutationInput";
import { RecipeWhereInput } from "../../../inputs/RecipeWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyRecipeArgs {
  @TypeGraphQL.Field(_type => RecipeUpdateManyMutationInput, { nullable: false })
  data!: RecipeUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => RecipeWhereInput, { nullable: true })
  where?: RecipeWhereInput | undefined;
}
