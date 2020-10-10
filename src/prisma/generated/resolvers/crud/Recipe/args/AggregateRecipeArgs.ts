import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { RecipeOrderByInput } from "../../../inputs/RecipeOrderByInput";
import { RecipeWhereInput } from "../../../inputs/RecipeWhereInput";
import { RecipeWhereUniqueInput } from "../../../inputs/RecipeWhereUniqueInput";
import { RecipeDistinctFieldEnum } from "../../../../enums/RecipeDistinctFieldEnum";

@TypeGraphQL.ArgsType()
export class AggregateRecipeArgs {
  @TypeGraphQL.Field(_type => RecipeWhereInput, { nullable: true })
  where?: RecipeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [RecipeOrderByInput], { nullable: true })
  orderBy?: RecipeOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => RecipeWhereUniqueInput, { nullable: true })
  cursor?: RecipeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [RecipeDistinctFieldEnum], { nullable: true })
  distinct?: Array<typeof RecipeDistinctFieldEnum[keyof typeof RecipeDistinctFieldEnum]> | undefined;
}
