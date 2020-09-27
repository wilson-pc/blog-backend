import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ProfileCreateInput } from "../../../inputs/ProfileCreateInput";

@TypeGraphQL.ArgsType()
export class CreateProfileArgs {
  @TypeGraphQL.Field(_type => ProfileCreateInput, { nullable: false })
  data!: ProfileCreateInput;
}
