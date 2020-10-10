import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { IngredientWhereInput } from "../inputs/IngredientWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class IngredientListRelationFilter {
  @TypeGraphQL.Field(_type => IngredientWhereInput, {
    nullable: true,
    description: undefined
  })
  every?: IngredientWhereInput | undefined;

  @TypeGraphQL.Field(_type => IngredientWhereInput, {
    nullable: true,
    description: undefined
  })
  some?: IngredientWhereInput | undefined;

  @TypeGraphQL.Field(_type => IngredientWhereInput, {
    nullable: true,
    description: undefined
  })
  none?: IngredientWhereInput | undefined;
}
