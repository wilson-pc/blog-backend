import { Field, InputType } from 'type-graphql';
import { IsEmail } from 'class-validator';

@InputType()
export class AuthInput {
  @IsEmail({}, { message: 'Email no valido' })
  @Field({ nullable: false })
  email: string;

  @Field({ nullable: false })
  password: string;
}
