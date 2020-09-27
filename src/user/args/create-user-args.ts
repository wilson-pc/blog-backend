import { ArgsType, Field } from 'type-graphql';
import { UserCreateInput } from '../inputs/user-create-input';

@ArgsType()
export class CreateUserArgs {
  @Field(_type => UserCreateInput, { nullable: false })
  data!: UserCreateInput;
}
