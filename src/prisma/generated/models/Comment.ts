import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { Post } from "../models/Post";
import { User } from "../models/User";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class Comment {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined,
  })
  message?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
    description: undefined,
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  postId!: string;

  post?: Post;

  user?: User | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined,
  })
  userId?: string | null;
}
