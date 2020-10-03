import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { VideoOrderByInput } from "../../../inputs/VideoOrderByInput";
import { VideoWhereInput } from "../../../inputs/VideoWhereInput";
import { VideoWhereUniqueInput } from "../../../inputs/VideoWhereUniqueInput";
import { VideoDistinctFieldEnum } from "../../../../enums/VideoDistinctFieldEnum";

@TypeGraphQL.ArgsType()
export class AggregateVideoArgs {
  @TypeGraphQL.Field(_type => VideoWhereInput, { nullable: true })
  where?: VideoWhereInput | undefined;

  @TypeGraphQL.Field(_type => [VideoOrderByInput], { nullable: true })
  orderBy?: VideoOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => VideoWhereUniqueInput, { nullable: true })
  cursor?: VideoWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [VideoDistinctFieldEnum], { nullable: true })
  distinct?: Array<typeof VideoDistinctFieldEnum[keyof typeof VideoDistinctFieldEnum]> | undefined;
}
