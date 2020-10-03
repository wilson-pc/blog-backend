import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Video2UpdateInput } from "../../../inputs/Video2UpdateInput";
import { Video2WhereUniqueInput } from "../../../inputs/Video2WhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateVideo2Args {
  @TypeGraphQL.Field(_type => Video2UpdateInput, { nullable: false })
  data!: Video2UpdateInput;

  @TypeGraphQL.Field(_type => Video2WhereUniqueInput, { nullable: false })
  where!: Video2WhereUniqueInput;
}
