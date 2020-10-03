import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { ResolutionCreateManyWithoutVideoInput } from "../inputs/ResolutionCreateManyWithoutVideoInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class Video2CreateInput {
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

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
    description: undefined
  })
  web?: boolean | undefined;

  @TypeGraphQL.Field(_type => ResolutionCreateManyWithoutVideoInput, {
    nullable: true,
    description: undefined
  })
  resolutions?: ResolutionCreateManyWithoutVideoInput | undefined;
}
