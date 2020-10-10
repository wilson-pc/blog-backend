import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { VideoWhereInput } from "../inputs/VideoWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class VideoRelationFilter {
  @TypeGraphQL.Field(_type => VideoWhereInput, {
    nullable: true,
    description: undefined
  })
  is?: VideoWhereInput | undefined;

  @TypeGraphQL.Field(_type => VideoWhereInput, {
    nullable: true,
    description: undefined
  })
  isNot?: VideoWhereInput | undefined;
}
