import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { IngredientWhereUniqueInput } from "../../../inputs/IngredientWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteIngredientArgs {
  @TypeGraphQL.Field(_type => IngredientWhereUniqueInput, { nullable: false })
  where!: IngredientWhereUniqueInput;
}
