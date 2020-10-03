import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Video2OrderByInput } from "../../../inputs/Video2OrderByInput";
import { Video2WhereInput } from "../../../inputs/Video2WhereInput";
import { Video2WhereUniqueInput } from "../../../inputs/Video2WhereUniqueInput";
import { Video2DistinctFieldEnum } from "../../../../enums/Video2DistinctFieldEnum";

@TypeGraphQL.ArgsType()
export class AggregateVideo2Args {
  @TypeGraphQL.Field(_type => Video2WhereInput, { nullable: true })
  where?: Video2WhereInput | undefined;

  @TypeGraphQL.Field(_type => [Video2OrderByInput], { nullable: true })
  orderBy?: Video2OrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => Video2WhereUniqueInput, { nullable: true })
  cursor?: Video2WhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Video2DistinctFieldEnum], { nullable: true })
  distinct?: Array<typeof Video2DistinctFieldEnum[keyof typeof Video2DistinctFieldEnum]> | undefined;
}
