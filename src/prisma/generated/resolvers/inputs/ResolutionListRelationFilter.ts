import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { ResolutionWhereInput } from "../inputs/ResolutionWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ResolutionListRelationFilter {
  @TypeGraphQL.Field(_type => ResolutionWhereInput, {
    nullable: true,
    description: undefined
  })
  every?: ResolutionWhereInput | undefined;

  @TypeGraphQL.Field(_type => ResolutionWhereInput, {
    nullable: true,
    description: undefined
  })
  some?: ResolutionWhereInput | undefined;

  @TypeGraphQL.Field(_type => ResolutionWhereInput, {
    nullable: true,
    description: undefined
  })
  none?: ResolutionWhereInput | undefined;
}
