import * as TypeGraphQL from "type-graphql";
import { UpdateManyVideo2Args } from "./args/UpdateManyVideo2Args";
import { Video2 } from "../../../models/Video2";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Video2)
export class UpdateManyVideo2Resolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyVideo2(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyVideo2Args): Promise<BatchPayload> {
    return ctx.prisma.video2.updateMany(args);
  }
}
