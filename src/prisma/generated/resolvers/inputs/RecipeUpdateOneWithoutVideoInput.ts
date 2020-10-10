import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { RecipeCreateWithoutVideoInput } from "../inputs/RecipeCreateWithoutVideoInput";
import { RecipeUpdateWithoutVideoDataInput } from "../inputs/RecipeUpdateWithoutVideoDataInput";
import { RecipeUpsertWithoutVideoInput } from "../inputs/RecipeUpsertWithoutVideoInput";
import { RecipeWhereUniqueInput } from "../inputs/RecipeWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class RecipeUpdateOneWithoutVideoInput {
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

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
    description: undefined
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
    description: undefined
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => RecipeUpdateWithoutVideoDataInput, {
    nullable: true,
    description: undefined
  })
  update?: RecipeUpdateWithoutVideoDataInput | undefined;

  @TypeGraphQL.Field(_type => RecipeUpsertWithoutVideoInput, {
    nullable: true,
    description: undefined
  })
  upsert?: RecipeUpsertWithoutVideoInput | undefined;
}
