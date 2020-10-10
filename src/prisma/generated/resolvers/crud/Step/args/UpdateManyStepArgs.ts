import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { StepUpdateManyMutationInput } from "../../../inputs/StepUpdateManyMutationInput";
import { StepWhereInput } from "../../../inputs/StepWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyStepArgs {
  @TypeGraphQL.Field(_type => StepUpdateManyMutationInput, { nullable: false })
  data!: StepUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => StepWhereInput, { nullable: true })
  where?: StepWhereInput | undefined;
}
