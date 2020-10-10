import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { StepCreateInput } from "../../../inputs/StepCreateInput";

@TypeGraphQL.ArgsType()
export class CreateStepArgs {
  @TypeGraphQL.Field(_type => StepCreateInput, { nullable: false })
  data!: StepCreateInput;
}
