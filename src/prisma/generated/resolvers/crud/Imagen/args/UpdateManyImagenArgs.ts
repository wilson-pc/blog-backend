import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ImagenUpdateManyMutationInput } from "../../../inputs/ImagenUpdateManyMutationInput";
import { ImagenWhereInput } from "../../../inputs/ImagenWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyImagenArgs {
  @TypeGraphQL.Field(_type => ImagenUpdateManyMutationInput, { nullable: false })
  data!: ImagenUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ImagenWhereInput, { nullable: true })
  where?: ImagenWhereInput | undefined;
}
