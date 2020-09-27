import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ProfileWhereUniqueInput } from "../../../inputs/ProfileWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindOneProfileArgs {
  @TypeGraphQL.Field(_type => ProfileWhereUniqueInput, { nullable: false })
  where!: ProfileWhereUniqueInput;
}
