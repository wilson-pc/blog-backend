import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ImagenCreateInput } from "../../../inputs/ImagenCreateInput";

@TypeGraphQL.ArgsType()
export class CreateImagenArgs {
  @TypeGraphQL.Field(_type => ImagenCreateInput, { nullable: false })
  data!: ImagenCreateInput;
}
