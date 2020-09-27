import { Context } from 'src/context.interface';
import { User } from 'src/prisma/generated';
import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import { AuthService } from './auth.service';
import { AuthInput } from './inputs/auth-input';
import { AuthPayload } from './types/auth-payload';

@Resolver()
export class AuthResolver {
  constructor(private serv: AuthService) {}
  @Mutation(returns => AuthPayload)
  async login(
    @Arg('login') login: AuthInput,
    @Ctx() { prisma }: Context,
  ): Promise<AuthPayload> {
    return await this.serv.validate(prisma, login);
  }

  @Authorized()
  @Query(returns => User)
  async profile(@Ctx() { prisma, req }: Context): Promise<User> {
    return prisma.user.findOne({ where: { id: req.body.userId } });
  }
}
