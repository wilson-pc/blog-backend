import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { IngredientUpdateManyMutationInput } from "../../../inputs/IngredientUpdateManyMutationInput";
import { IngredientWhereInput } from "../../../inputs/IngredientWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyIngredientArgs {
  @TypeGraphQL.Field(_type => IngredientUpdateManyMutationInput, { nullable: false })
  data!: IngredientUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => IngredientWhereInput, { nullable: true })
  where?: IngredientWhereInput | undefined;
}
