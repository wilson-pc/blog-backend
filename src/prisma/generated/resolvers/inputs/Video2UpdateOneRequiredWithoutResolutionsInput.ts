import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { Video2CreateWithoutResolutionsInput } from "../inputs/Video2CreateWithoutResolutionsInput";
import { Video2UpdateWithoutResolutionsDataInput } from "../inputs/Video2UpdateWithoutResolutionsDataInput";
import { Video2UpsertWithoutResolutionsInput } from "../inputs/Video2UpsertWithoutResolutionsInput";
import { Video2WhereUniqueInput } from "../inputs/Video2WhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class Video2UpdateOneRequiredWithoutResolutionsInput {
  @TypeGraphQL.Field(_type => Video2CreateWithoutResolutionsInput, {
    nullable: true,
    description: undefined
  })
  create?: Video2CreateWithoutResolutionsInput | undefined;

  @TypeGraphQL.Field(_type => Video2WhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: Video2WhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Video2UpdateWithoutResolutionsDataInput, {
    nullable: true,
    description: undefined
  })
  update?: Video2UpdateWithoutResolutionsDataInput | undefined;

  @TypeGraphQL.Field(_type => Video2UpsertWithoutResolutionsInput, {
    nullable: true,
    description: undefined
  })
  upsert?: Video2UpsertWithoutResolutionsInput | undefined;
}
