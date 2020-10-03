import * as TypeGraphQL from "type-graphql";
import { DeleteManyVideo2Args } from "./args/DeleteManyVideo2Args";
import { Video2 } from "../../../models/Video2";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Video2)
export class DeleteManyVideo2Resolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyVideo2(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyVideo2Args): Promise<BatchPayload> {
    return ctx.prisma.video2.deleteMany(args);
  }
}
