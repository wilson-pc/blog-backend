import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ResolutionOrderByInput } from "../../../inputs/ResolutionOrderByInput";
import { ResolutionWhereInput } from "../../../inputs/ResolutionWhereInput";
import { ResolutionWhereUniqueInput } from "../../../inputs/ResolutionWhereUniqueInput";
import { ResolutionDistinctFieldEnum } from "../../../../enums/ResolutionDistinctFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyResolutionArgs {
  @TypeGraphQL.Field(_type => ResolutionWhereInput, { nullable: true })
  where?: ResolutionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ResolutionOrderByInput], { nullable: true })
  orderBy?: ResolutionOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => ResolutionWhereUniqueInput, { nullable: true })
  cursor?: ResolutionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ResolutionDistinctFieldEnum], { nullable: true })
  distinct?: Array<typeof ResolutionDistinctFieldEnum[keyof typeof ResolutionDistinctFieldEnum]> | undefined;
}
