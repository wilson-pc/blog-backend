import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { VideoCreateInput } from "../../../inputs/VideoCreateInput";

@TypeGraphQL.ArgsType()
export class CreateVideoArgs {
  @TypeGraphQL.Field(_type => VideoCreateInput, { nullable: false })
  data!: VideoCreateInput;
}
