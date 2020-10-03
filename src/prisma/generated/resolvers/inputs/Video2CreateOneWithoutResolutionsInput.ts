import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { Video2CreateWithoutResolutionsInput } from "../inputs/Video2CreateWithoutResolutionsInput";
import { Video2WhereUniqueInput } from "../inputs/Video2WhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class Video2CreateOneWithoutResolutionsInput {
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
}
