import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { StepWhereInput } from "../../../inputs/StepWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyStepArgs {
  @TypeGraphQL.Field(_type => StepWhereInput, { nullable: true })
  where?: StepWhereInput | undefined;
}
