import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { IngredientCreateInput } from "../../../inputs/IngredientCreateInput";
import { IngredientUpdateInput } from "../../../inputs/IngredientUpdateInput";
import { IngredientWhereUniqueInput } from "../../../inputs/IngredientWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertIngredientArgs {
  @TypeGraphQL.Field(_type => IngredientWhereUniqueInput, { nullable: false })
  where!: IngredientWhereUniqueInput;

  @TypeGraphQL.Field(_type => IngredientCreateInput, { nullable: false })
  create!: IngredientCreateInput;

  @TypeGraphQL.Field(_type => IngredientUpdateInput, { nullable: false })
  update!: IngredientUpdateInput;
}
