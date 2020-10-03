import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ImagenCreateInput } from "../../../inputs/ImagenCreateInput";
import { ImagenUpdateInput } from "../../../inputs/ImagenUpdateInput";
import { ImagenWhereUniqueInput } from "../../../inputs/ImagenWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertImagenArgs {
  @TypeGraphQL.Field(_type => ImagenWhereUniqueInput, { nullable: false })
  where!: ImagenWhereUniqueInput;

  @TypeGraphQL.Field(_type => ImagenCreateInput, { nullable: false })
  create!: ImagenCreateInput;

  @TypeGraphQL.Field(_type => ImagenUpdateInput, { nullable: false })
  update!: ImagenUpdateInput;
}
