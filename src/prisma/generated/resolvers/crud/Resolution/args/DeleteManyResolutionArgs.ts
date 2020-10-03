import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ResolutionWhereInput } from "../../../inputs/ResolutionWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyResolutionArgs {
  @TypeGraphQL.Field(_type => ResolutionWhereInput, { nullable: true })
  where?: ResolutionWhereInput | undefined;
}
