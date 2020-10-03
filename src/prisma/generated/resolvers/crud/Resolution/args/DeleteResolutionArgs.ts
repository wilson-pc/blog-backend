import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ResolutionWhereUniqueInput } from "../../../inputs/ResolutionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteResolutionArgs {
  @TypeGraphQL.Field(_type => ResolutionWhereUniqueInput, { nullable: false })
  where!: ResolutionWhereUniqueInput;
}