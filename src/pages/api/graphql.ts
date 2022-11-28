
import typeDefs from '../../graphql/type-defs'
import  resolvers  from '../../graphql/resolvers';
import { ApolloServer }  from 'apollo-server';
// import Cors from 'micro-cors';

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});



