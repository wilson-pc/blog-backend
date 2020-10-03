import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ResolutionUpdateManyMutationInput } from "../../../inputs/ResolutionUpdateManyMutationInput";
import { ResolutionWhereInput } from "../../../inputs/ResolutionWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyResolutionArgs {
  @TypeGraphQL.Field(_type => ResolutionUpdateManyMutationInput, { nullable: false })
  data!: ResolutionUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ResolutionWhereInput, { nullable: true })
  where?: ResolutionWhereInput | undefined;
}
