import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ImagenUpdateInput } from "../../../inputs/ImagenUpdateInput";
import { ImagenWhereUniqueInput } from "../../../inputs/ImagenWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateImagenArgs {
  @TypeGraphQL.Field(_type => ImagenUpdateInput, { nullable: false })
  data!: ImagenUpdateInput;

  @TypeGraphQL.Field(_type => ImagenWhereUniqueInput, { nullable: false })
  where!: ImagenWhereUniqueInput;
}
