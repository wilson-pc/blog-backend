import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { IngredientOrderByInput } from "../../../inputs/IngredientOrderByInput";
import { IngredientWhereInput } from "../../../inputs/IngredientWhereInput";
import { IngredientWhereUniqueInput } from "../../../inputs/IngredientWhereUniqueInput";
import { IngredientDistinctFieldEnum } from "../../../../enums/IngredientDistinctFieldEnum";

@TypeGraphQL.ArgsType()
export class RecipeIngredientsArgs {
  @TypeGraphQL.Field(_type => IngredientWhereInput, { nullable: true })
  where?: IngredientWhereInput | undefined;

  @TypeGraphQL.Field(_type => [IngredientOrderByInput], { nullable: true })
  orderBy?: IngredientOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => IngredientWhereUniqueInput, { nullable: true })
  cursor?: IngredientWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [IngredientDistinctFieldEnum], { nullable: true })
  distinct?: Array<typeof IngredientDistinctFieldEnum[keyof typeof IngredientDistinctFieldEnum]> | undefined;
}
