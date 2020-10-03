import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { VideoWhereUniqueInput } from "../../../inputs/VideoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteVideoArgs {
  @TypeGraphQL.Field(_type => VideoWhereUniqueInput, { nullable: false })
  where!: VideoWhereUniqueInput;
}
