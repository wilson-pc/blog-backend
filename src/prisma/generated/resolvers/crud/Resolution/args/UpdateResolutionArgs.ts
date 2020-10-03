import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ResolutionUpdateInput } from "../../../inputs/ResolutionUpdateInput";
import { ResolutionWhereUniqueInput } from "../../../inputs/ResolutionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateResolutionArgs {
  @TypeGraphQL.Field(_type => ResolutionUpdateInput, { nullable: false })
  data!: ResolutionUpdateInput;

  @TypeGraphQL.Field(_type => ResolutionWhereUniqueInput, { nullable: false })
  where!: ResolutionWhereUniqueInput;
}
