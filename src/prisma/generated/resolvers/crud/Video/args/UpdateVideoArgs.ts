import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { VideoUpdateInput } from "../../../inputs/VideoUpdateInput";
import { VideoWhereUniqueInput } from "../../../inputs/VideoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateVideoArgs {
  @TypeGraphQL.Field(_type => VideoUpdateInput, { nullable: false })
  data!: VideoUpdateInput;

  @TypeGraphQL.Field(_type => VideoWhereUniqueInput, { nullable: false })
  where!: VideoWhereUniqueInput;
}
