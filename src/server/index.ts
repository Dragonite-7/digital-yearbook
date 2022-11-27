import { ApolloServer, gql } from 'apollo-server';
import { typeDefs } from './graphql/type-defs';
import { resolvers } from './graphql/resolvers';



const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});


