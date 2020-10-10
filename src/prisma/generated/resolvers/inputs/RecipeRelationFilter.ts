import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { RecipeWhereInput } from "../inputs/RecipeWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class RecipeRelationFilter {
  @TypeGraphQL.Field(_type => RecipeWhereInput, {
    nullable: true,
    description: undefined
  })
  is?: RecipeWhereInput | undefined;

  @TypeGraphQL.Field(_type => RecipeWhereInput, {
    nullable: true,
    description: undefined
  })
  isNot?: RecipeWhereInput | undefined;
}
