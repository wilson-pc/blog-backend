import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { IngredientCreateWithoutRecipeInput } from "../inputs/IngredientCreateWithoutRecipeInput";
import { IngredientScalarWhereInput } from "../inputs/IngredientScalarWhereInput";
import { IngredientUpdateManyWithWhereNestedInput } from "../inputs/IngredientUpdateManyWithWhereNestedInput";
import { IngredientUpdateWithWhereUniqueWithoutRecipeInput } from "../inputs/IngredientUpdateWithWhereUniqueWithoutRecipeInput";
import { IngredientUpsertWithWhereUniqueWithoutRecipeInput } from "../inputs/IngredientUpsertWithWhereUniqueWithoutRecipeInput";
import { IngredientWhereUniqueInput } from "../inputs/IngredientWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class IngredientUpdateManyWithoutRecipeInput {
  @TypeGraphQL.Field(_type => [IngredientCreateWithoutRecipeInput], {
    nullable: true,
    description: undefined
  })
  create?: IngredientCreateWithoutRecipeInput[] | undefined;

  @TypeGraphQL.Field(_type => [IngredientWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: IngredientWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [IngredientWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  set?: IngredientWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [IngredientWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  disconnect?: IngredientWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [IngredientWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  delete?: IngredientWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [IngredientUpdateWithWhereUniqueWithoutRecipeInput], {
    nullable: true,
    description: undefined
  })
  update?: IngredientUpdateWithWhereUniqueWithoutRecipeInput[] | undefined;

  @TypeGraphQL.Field(_type => [IngredientUpdateManyWithWhereNestedInput], {
    nullable: true,
    description: undefined
  })
  updateMany?: IngredientUpdateManyWithWhereNestedInput[] | undefined;

  @TypeGraphQL.Field(_type => [IngredientScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  deleteMany?: IngredientScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [IngredientUpsertWithWhereUniqueWithoutRecipeInput], {
    nullable: true,
    description: undefined
  })
  upsert?: IngredientUpsertWithWhereUniqueWithoutRecipeInput[] | undefined;
}
