import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ProfileUpdateManyMutationInput } from "../../../inputs/ProfileUpdateManyMutationInput";
import { ProfileWhereInput } from "../../../inputs/ProfileWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyProfileArgs {
  @TypeGraphQL.Field(_type => ProfileUpdateManyMutationInput, { nullable: false })
  data!: ProfileUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ProfileWhereInput, { nullable: true })
  where?: ProfileWhereInput | undefined;
}
