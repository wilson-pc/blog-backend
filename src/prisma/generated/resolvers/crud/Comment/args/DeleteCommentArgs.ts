import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { CommentWhereUniqueInput } from "../../../inputs/CommentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteCommentArgs {
  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, { nullable: false })
  where!: CommentWhereUniqueInput;
}
