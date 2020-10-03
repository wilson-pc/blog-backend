import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { ResolutionCreateWithoutVideoInput } from "../inputs/ResolutionCreateWithoutVideoInput";
import { ResolutionWhereUniqueInput } from "../inputs/ResolutionWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ResolutionCreateManyWithoutVideoInput {
  @TypeGraphQL.Field(_type => [ResolutionCreateWithoutVideoInput], {
    nullable: true,
    description: undefined
  })
  create?: ResolutionCreateWithoutVideoInput[] | undefined;

  @TypeGraphQL.Field(_type => [ResolutionWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: ResolutionWhereUniqueInput[] | undefined;
}
