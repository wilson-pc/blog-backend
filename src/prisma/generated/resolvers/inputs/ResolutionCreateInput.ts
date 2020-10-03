import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { Video2CreateOneWithoutResolutionsInput } from "../inputs/Video2CreateOneWithoutResolutionsInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ResolutionCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  name!: string;

  @TypeGraphQL.Field(_type => Video2CreateOneWithoutResolutionsInput, {
    nullable: false,
    description: undefined
  })
  video!: Video2CreateOneWithoutResolutionsInput;
}
