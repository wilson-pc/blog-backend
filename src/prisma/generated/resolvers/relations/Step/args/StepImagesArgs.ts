import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ImagenOrderByInput } from "../../../inputs/ImagenOrderByInput";
import { ImagenWhereInput } from "../../../inputs/ImagenWhereInput";
import { ImagenWhereUniqueInput } from "../../../inputs/ImagenWhereUniqueInput";
import { ImagenDistinctFieldEnum } from "../../../../enums/ImagenDistinctFieldEnum";

@TypeGraphQL.ArgsType()
export class StepImagesArgs {
  @TypeGraphQL.Field(_type => ImagenWhereInput, { nullable: true })
  where?: ImagenWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ImagenOrderByInput], { nullable: true })
  orderBy?: ImagenOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => ImagenWhereUniqueInput, { nullable: true })
  cursor?: ImagenWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ImagenDistinctFieldEnum], { nullable: true })
  distinct?: Array<typeof ImagenDistinctFieldEnum[keyof typeof ImagenDistinctFieldEnum]> | undefined;
}
