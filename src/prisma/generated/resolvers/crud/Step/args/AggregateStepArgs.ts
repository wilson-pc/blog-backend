import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { StepOrderByInput } from "../../../inputs/StepOrderByInput";
import { StepWhereInput } from "../../../inputs/StepWhereInput";
import { StepWhereUniqueInput } from "../../../inputs/StepWhereUniqueInput";
import { StepDistinctFieldEnum } from "../../../../enums/StepDistinctFieldEnum";

@TypeGraphQL.ArgsType()
export class AggregateStepArgs {
  @TypeGraphQL.Field(_type => StepWhereInput, { nullable: true })
  where?: StepWhereInput | undefined;

  @TypeGraphQL.Field(_type => [StepOrderByInput], { nullable: true })
  orderBy?: StepOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => StepWhereUniqueInput, { nullable: true })
  cursor?: StepWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [StepDistinctFieldEnum], { nullable: true })
  distinct?: Array<typeof StepDistinctFieldEnum[keyof typeof StepDistinctFieldEnum]> | undefined;
}
