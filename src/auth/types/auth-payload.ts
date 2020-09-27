import { User } from 'src/prisma/generated';
import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class AuthPayload {
  @Field({ nullable: false })
  token: string;

  @Field(type => User, { nullable: true })
  user?: User | undefined;
}
