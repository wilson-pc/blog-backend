import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ImagenWhereUniqueInput } from "../../../inputs/ImagenWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteImagenArgs {
  @TypeGraphQL.Field(_type => ImagenWhereUniqueInput, { nullable: false })
  where!: ImagenWhereUniqueInput;
}
