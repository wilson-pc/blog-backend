import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ProfileWhereInput } from "../../../inputs/ProfileWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyProfileArgs {
  @TypeGraphQL.Field(_type => ProfileWhereInput, { nullable: true })
  where?: ProfileWhereInput | undefined;
}
