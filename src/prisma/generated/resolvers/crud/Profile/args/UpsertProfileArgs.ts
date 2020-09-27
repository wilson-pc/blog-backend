import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ProfileCreateInput } from "../../../inputs/ProfileCreateInput";
import { ProfileUpdateInput } from "../../../inputs/ProfileUpdateInput";
import { ProfileWhereUniqueInput } from "../../../inputs/ProfileWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertProfileArgs {
  @TypeGraphQL.Field(_type => ProfileWhereUniqueInput, { nullable: false })
  where!: ProfileWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProfileCreateInput, { nullable: false })
  create!: ProfileCreateInput;

  @TypeGraphQL.Field(_type => ProfileUpdateInput, { nullable: false })
  update!: ProfileUpdateInput;
}
