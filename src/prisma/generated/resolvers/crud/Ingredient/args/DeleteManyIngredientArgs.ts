import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { IngredientWhereInput } from "../../../inputs/IngredientWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyIngredientArgs {
  @TypeGraphQL.Field(_type => IngredientWhereInput, { nullable: true })
  where?: IngredientWhereInput | undefined;
}
