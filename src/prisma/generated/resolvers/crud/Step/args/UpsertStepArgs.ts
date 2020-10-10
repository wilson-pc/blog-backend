import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { StepCreateInput } from "../../../inputs/StepCreateInput";
import { StepUpdateInput } from "../../../inputs/StepUpdateInput";
import { StepWhereUniqueInput } from "../../../inputs/StepWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertStepArgs {
  @TypeGraphQL.Field(_type => StepWhereUniqueInput, { nullable: false })
  where!: StepWhereUniqueInput;

  @TypeGraphQL.Field(_type => StepCreateInput, { nullable: false })
  create!: StepCreateInput;

  @TypeGraphQL.Field(_type => StepUpdateInput, { nullable: false })
  update!: StepUpdateInput;
}
