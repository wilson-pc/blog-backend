import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { StepWhereUniqueInput } from "../../../inputs/StepWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindOneStepArgs {
  @TypeGraphQL.Field(_type => StepWhereUniqueInput, { nullable: false })
  where!: StepWhereUniqueInput;
}