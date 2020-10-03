import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { StringFilter } from "../inputs/StringFilter";
import { Video2WhereInput } from "../inputs/Video2WhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ResolutionWhereInput {
  @TypeGraphQL.Field(_type => [ResolutionWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: ResolutionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ResolutionWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: ResolutionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ResolutionWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: ResolutionWhereInput[] | undefined;

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
  videoId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => Video2WhereInput, {
    nullable: true,
    description: undefined
  })
  video?: Video2WhereInput | undefined;
}
