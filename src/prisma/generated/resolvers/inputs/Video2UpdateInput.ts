import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { ResolutionUpdateManyWithoutVideoInput } from "../inputs/ResolutionUpdateManyWithoutVideoInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class Video2UpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true,
    description: undefined
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true,
    description: undefined
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true,
    description: undefined
  })
  web?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ResolutionUpdateManyWithoutVideoInput, {
    nullable: true,
    description: undefined
  })
  resolutions?: ResolutionUpdateManyWithoutVideoInput | undefined;
}
