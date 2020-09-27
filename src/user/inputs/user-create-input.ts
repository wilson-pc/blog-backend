import * as TypeGraphQL from 'type-graphql';
import { IsEmail, Max, Min } from 'class-validator';
import { Field, InputType } from 'type-graphql';
import { PasswordScalar } from 'src/scalars/password.scalars';

@InputType({
  isAbstract: true,
  description: undefined,
})
export class UserCreateInput {
  @Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  @IsEmail({}, { message: 'Email no valido' })
  email!: string;

  @Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  name!: string;

  @TypeGraphQL.Field(type => PasswordScalar, {
    nullable: false,
    description: undefined,
  })
  @Min(5, { message: 'Email no valido' })
  password!: string;
}
