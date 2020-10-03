import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { ResolutionCreateWithoutVideoInput } from "../inputs/ResolutionCreateWithoutVideoInput";
import { ResolutionUpdateWithoutVideoDataInput } from "../inputs/ResolutionUpdateWithoutVideoDataInput";
import { ResolutionWhereUniqueInput } from "../inputs/ResolutionWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ResolutionUpsertWithWhereUniqueWithoutVideoInput {
  @TypeGraphQL.Field(_type => ResolutionWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: ResolutionWhereUniqueInput;

  @TypeGraphQL.Field(_type => ResolutionUpdateWithoutVideoDataInput, {
    nullable: false,
    description: undefined
  })
  update!: ResolutionUpdateWithoutVideoDataInput;

  @TypeGraphQL.Field(_type => ResolutionCreateWithoutVideoInput, {
    nullable: false,
    description: undefined
  })
  create!: ResolutionCreateWithoutVideoInput;
}
