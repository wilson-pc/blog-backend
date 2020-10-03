import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { Video2CreateWithoutResolutionsInput } from "../inputs/Video2CreateWithoutResolutionsInput";
import { Video2UpdateWithoutResolutionsDataInput } from "../inputs/Video2UpdateWithoutResolutionsDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class Video2UpsertWithoutResolutionsInput {
  @TypeGraphQL.Field(_type => Video2UpdateWithoutResolutionsDataInput, {
    nullable: false,
    description: undefined
  })
  update!: Video2UpdateWithoutResolutionsDataInput;

  @TypeGraphQL.Field(_type => Video2CreateWithoutResolutionsInput, {
    nullable: false,
    description: undefined
  })
  create!: Video2CreateWithoutResolutionsInput;
}
