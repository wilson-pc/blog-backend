import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { PostWhereInput } from "../inputs/PostWhereInput";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CommentWhereInput {
  @TypeGraphQL.Field(_type => [CommentWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: CommentWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: CommentWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: CommentWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true,
    description: undefined
  })
  message?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
    description: undefined
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  postId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => PostWhereInput, {
    nullable: true,
    description: undefined
  })
  post?: PostWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true,
    description: undefined
  })
  user?: UserWhereInput | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true,
    description: undefined
  })
  userId?: StringNullableFilter | undefined;
}
