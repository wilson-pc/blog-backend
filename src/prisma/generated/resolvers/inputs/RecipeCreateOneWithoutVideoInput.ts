import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { RecipeCreateWithoutVideoInput } from "../inputs/RecipeCreateWithoutVideoInput";
import { RecipeWhereUniqueInput } from "../inputs/RecipeWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class RecipeCreateOneWithoutVideoInput {
  @TypeGraphQL.Field(_type => RecipeCreateWithoutVideoInput, {
    nullable: true,
    description: undefined
  })
  create?: RecipeCreateWithoutVideoInput | undefined;

  @TypeGraphQL.Field(_type => RecipeWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: RecipeWhereUniqueInput | undefined;
}
