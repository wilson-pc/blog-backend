import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Video2CreateInput } from "../../../inputs/Video2CreateInput";

@TypeGraphQL.ArgsType()
export class CreateVideo2Args {
  @TypeGraphQL.Field(_type => Video2CreateInput, { nullable: false })
  data!: Video2CreateInput;
}
