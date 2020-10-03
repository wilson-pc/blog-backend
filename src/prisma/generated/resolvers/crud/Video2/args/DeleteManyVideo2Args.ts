import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Video2WhereInput } from "../../../inputs/Video2WhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyVideo2Args {
  @TypeGraphQL.Field(_type => Video2WhereInput, { nullable: true })
  where?: Video2WhereInput | undefined;
}
