import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Video2CreateInput } from "../../../inputs/Video2CreateInput";
import { Video2UpdateInput } from "../../../inputs/Video2UpdateInput";
import { Video2WhereUniqueInput } from "../../../inputs/Video2WhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertVideo2Args {
  @TypeGraphQL.Field(_type => Video2WhereUniqueInput, { nullable: false })
  where!: Video2WhereUniqueInput;

  @TypeGraphQL.Field(_type => Video2CreateInput, { nullable: false })
  create!: Video2CreateInput;

  @TypeGraphQL.Field(_type => Video2UpdateInput, { nullable: false })
  update!: Video2UpdateInput;
}
