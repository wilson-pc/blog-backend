import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { RecipeCreateWithoutVideoInput } from "../inputs/RecipeCreateWithoutVideoInput";
import { RecipeUpdateWithoutVideoDataInput } from "../inputs/RecipeUpdateWithoutVideoDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class RecipeUpsertWithoutVideoInput {
  @TypeGraphQL.Field(_type => RecipeUpdateWithoutVideoDataInput, {
    nullable: false,
    description: undefined
  })
  update!: RecipeUpdateWithoutVideoDataInput;

  @TypeGraphQL.Field(_type => RecipeCreateWithoutVideoInput, {
    nullable: false,
    description: undefined
  })
  create!: RecipeCreateWithoutVideoInput;
}
