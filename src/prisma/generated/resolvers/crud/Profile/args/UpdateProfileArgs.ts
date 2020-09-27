import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ProfileUpdateInput } from "../../../inputs/ProfileUpdateInput";
import { ProfileWhereUniqueInput } from "../../../inputs/ProfileWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateProfileArgs {
  @TypeGraphQL.Field(_type => ProfileUpdateInput, { nullable: false })
  data!: ProfileUpdateInput;

  @TypeGraphQL.Field(_type => ProfileWhereUniqueInput, { nullable: false })
  where!: ProfileWhereUniqueInput;
}
