import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { VideoCreateWithoutRecipeInput } from "../inputs/VideoCreateWithoutRecipeInput";
import { VideoUpdateWithoutRecipeDataInput } from "../inputs/VideoUpdateWithoutRecipeDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class VideoUpsertWithoutRecipeInput {
  @TypeGraphQL.Field(_type => VideoUpdateWithoutRecipeDataInput, {
    nullable: false,
    description: undefined
  })
  update!: VideoUpdateWithoutRecipeDataInput;

  @TypeGraphQL.Field(_type => VideoCreateWithoutRecipeInput, {
    nullable: false,
    description: undefined
  })
  create!: VideoCreateWithoutRecipeInput;
}
