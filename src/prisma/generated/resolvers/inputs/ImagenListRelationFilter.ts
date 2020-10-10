import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { ImagenWhereInput } from "../inputs/ImagenWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ImagenListRelationFilter {
  @TypeGraphQL.Field(_type => ImagenWhereInput, {
    nullable: true,
    description: undefined
  })
  every?: ImagenWhereInput | undefined;

  @TypeGraphQL.Field(_type => ImagenWhereInput, {
    nullable: true,
    description: undefined
  })
  some?: ImagenWhereInput | undefined;

  @TypeGraphQL.Field(_type => ImagenWhereInput, {
    nullable: true,
    description: undefined
  })
  none?: ImagenWhereInput | undefined;
}
