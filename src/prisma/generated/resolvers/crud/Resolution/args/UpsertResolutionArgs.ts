import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ResolutionCreateInput } from "../../../inputs/ResolutionCreateInput";
import { ResolutionUpdateInput } from "../../../inputs/ResolutionUpdateInput";
import { ResolutionWhereUniqueInput } from "../../../inputs/ResolutionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertResolutionArgs {
  @TypeGraphQL.Field(_type => ResolutionWhereUniqueInput, { nullable: false })
  where!: ResolutionWhereUniqueInput;

  @TypeGraphQL.Field(_type => ResolutionCreateInput, { nullable: false })
  create!: ResolutionCreateInput;

  @TypeGraphQL.Field(_type => ResolutionUpdateInput, { nullable: false })
  update!: ResolutionUpdateInput;
}
