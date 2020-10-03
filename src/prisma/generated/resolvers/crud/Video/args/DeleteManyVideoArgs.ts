import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { VideoWhereInput } from "../../../inputs/VideoWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyVideoArgs {
  @TypeGraphQL.Field(_type => VideoWhereInput, { nullable: true })
  where?: VideoWhereInput | undefined;
}
