import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ImagenWhereInput } from "../../../inputs/ImagenWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyImagenArgs {
  @TypeGraphQL.Field(_type => ImagenWhereInput, { nullable: true })
  where?: ImagenWhereInput | undefined;
}
