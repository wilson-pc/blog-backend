import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { IngredientScalarWhereInput } from "../inputs/IngredientScalarWhereInput";
import { IngredientUpdateManyDataInput } from "../inputs/IngredientUpdateManyDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class IngredientUpdateManyWithWhereNestedInput {
  @TypeGraphQL.Field(_type => IngredientScalarWhereInput, {
    nullable: false,
    description: undefined
  })
  where!: IngredientScalarWhereInput;

  @TypeGraphQL.Field(_type => IngredientUpdateManyDataInput, {
    nullable: false,
    description: undefined
  })
  data!: IngredientUpdateManyDataInput;
}
