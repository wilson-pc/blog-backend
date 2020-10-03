import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ResolutionCreateInput } from "../../../inputs/ResolutionCreateInput";

@TypeGraphQL.ArgsType()
export class CreateResolutionArgs {
  @TypeGraphQL.Field(_type => ResolutionCreateInput, { nullable: false })
  data!: ResolutionCreateInput;
}
