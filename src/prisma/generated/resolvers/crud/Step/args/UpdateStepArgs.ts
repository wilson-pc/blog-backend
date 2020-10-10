import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { StepUpdateInput } from "../../../inputs/StepUpdateInput";
import { StepWhereUniqueInput } from "../../../inputs/StepWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateStepArgs {
  @TypeGraphQL.Field(_type => StepUpdateInput, { nullable: false })
  data!: StepUpdateInput;

  @TypeGraphQL.Field(_type => StepWhereUniqueInput, { nullable: false })
  where!: StepWhereUniqueInput;
}
