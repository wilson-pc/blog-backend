import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { BoolFilter } from "../inputs/BoolFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class VideoWhereInput {
  @TypeGraphQL.Field(_type => [VideoWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: VideoWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VideoWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: VideoWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VideoWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: VideoWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  format?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true,
    description: undefined
  })
  hls?: BoolFilter | undefined;
}
