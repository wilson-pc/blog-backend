import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { VideoCreateInput } from "../../../inputs/VideoCreateInput";
import { VideoUpdateInput } from "../../../inputs/VideoUpdateInput";
import { VideoWhereUniqueInput } from "../../../inputs/VideoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertVideoArgs {
  @TypeGraphQL.Field(_type => VideoWhereUniqueInput, { nullable: false })
  where!: VideoWhereUniqueInput;

  @TypeGraphQL.Field(_type => VideoCreateInput, { nullable: false })
  create!: VideoCreateInput;

  @TypeGraphQL.Field(_type => VideoUpdateInput, { nullable: false })
  update!: VideoUpdateInput;
}
