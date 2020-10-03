import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Video2UpdateManyMutationInput } from "../../../inputs/Video2UpdateManyMutationInput";
import { Video2WhereInput } from "../../../inputs/Video2WhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyVideo2Args {
  @TypeGraphQL.Field(_type => Video2UpdateManyMutationInput, { nullable: false })
  data!: Video2UpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Video2WhereInput, { nullable: true })
  where?: Video2WhereInput | undefined;
}
