import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { ResolutionScalarWhereInput } from "../inputs/ResolutionScalarWhereInput";
import { ResolutionUpdateManyDataInput } from "../inputs/ResolutionUpdateManyDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ResolutionUpdateManyWithWhereNestedInput {
  @TypeGraphQL.Field(_type => ResolutionScalarWhereInput, {
    nullable: false,
    description: undefined
  })
  where!: ResolutionScalarWhereInput;

  @TypeGraphQL.Field(_type => ResolutionUpdateManyDataInput, {
    nullable: false,
    description: undefined
  })
  data!: ResolutionUpdateManyDataInput;
}
