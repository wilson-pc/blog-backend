import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ProfileOrderByInput } from "../../../inputs/ProfileOrderByInput";
import { ProfileWhereInput } from "../../../inputs/ProfileWhereInput";
import { ProfileWhereUniqueInput } from "../../../inputs/ProfileWhereUniqueInput";
import { ProfileDistinctFieldEnum } from "../../../../enums/ProfileDistinctFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyProfileArgs {
  @TypeGraphQL.Field(_type => ProfileWhereInput, { nullable: true })
  where?: ProfileWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ProfileOrderByInput], { nullable: true })
  orderBy?: ProfileOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => ProfileWhereUniqueInput, { nullable: true })
  cursor?: ProfileWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ProfileDistinctFieldEnum], { nullable: true })
  distinct?: Array<typeof ProfileDistinctFieldEnum[keyof typeof ProfileDistinctFieldEnum]> | undefined;
}
