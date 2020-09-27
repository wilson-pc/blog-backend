import { GraphQLScalarType, Kind } from 'graphql';
import { hashSync } from 'bcrypt';

export const PasswordScalar = new GraphQLScalarType({
  name: 'Password',
  description: 'encript password in scalar type',
  parseValue(value: string) {
    return hashSync(value, 9); // value from the client input variables
  },
  serialize(value: string) {
    return value; // value sent to the client
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      return hashSync(ast.value, 9); // value from the client query
    }
    return null;
  },
});
