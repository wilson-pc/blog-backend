import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { RecipeCreateOneWithoutVideoInput } from "../inputs/RecipeCreateOneWithoutVideoInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class VideoCreateInput {
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

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  format!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
    description: undefined
  })
  hls?: boolean | undefined;

  @TypeGraphQL.Field(_type => RecipeCreateOneWithoutVideoInput, {
    nullable: true,
    description: undefined
  })
  Recipe?: RecipeCreateOneWithoutVideoInput | undefined;
}
