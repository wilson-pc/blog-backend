import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { VideoCreateWithoutRecipeInput } from "../inputs/VideoCreateWithoutRecipeInput";
import { VideoUpdateWithoutRecipeDataInput } from "../inputs/VideoUpdateWithoutRecipeDataInput";
import { VideoUpsertWithoutRecipeInput } from "../inputs/VideoUpsertWithoutRecipeInput";
import { VideoWhereUniqueInput } from "../inputs/VideoWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class VideoUpdateOneWithoutRecipeInput {
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

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
    description: undefined
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
    description: undefined
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => VideoUpdateWithoutRecipeDataInput, {
    nullable: true,
    description: undefined
  })
  update?: VideoUpdateWithoutRecipeDataInput | undefined;

  @TypeGraphQL.Field(_type => VideoUpsertWithoutRecipeInput, {
    nullable: true,
    description: undefined
  })
  upsert?: VideoUpsertWithoutRecipeInput | undefined;
}
