import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { VideoCreateWithoutRecipeInput } from "../inputs/VideoCreateWithoutRecipeInput";
import { VideoWhereUniqueInput } from "../inputs/VideoWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class VideoCreateOneWithoutRecipeInput {
  @TypeGraphQL.Field(_type => VideoCreateWithoutRecipeInput, {
    nullable: true,
    description: undefined
  })
  create?: VideoCreateWithoutRecipeInput | undefined;

  @TypeGraphQL.Field(_type => VideoWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: VideoWhereUniqueInput | undefined;
}
