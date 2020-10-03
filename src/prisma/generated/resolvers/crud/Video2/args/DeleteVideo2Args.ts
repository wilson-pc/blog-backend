import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Video2WhereUniqueInput } from "../../../inputs/Video2WhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteVideo2Args {
  @TypeGraphQL.Field(_type => Video2WhereUniqueInput, { nullable: false })
  where!: Video2WhereUniqueInput;
}
