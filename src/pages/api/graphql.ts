// https://medium.com/codex/creating-a-graphql-api-with-nextjs-ef51a0f6e6ed
import { gql, ApolloServer } from "apollo-server-micro";
const typeDefs = require('../../graphql/type-defs')
const resolvers = require('../../graphql/resolvers')
import Cors from 'micro-cors' // error here just because this doesn't have type file
const cors = Cors();

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

const startServer = apolloServer.start();

export default cors(async (req:any, res:any) => {
  // all the setHeader stuff is because of CORS issues
//   res.setHeader("Access-Control-Allow-Credentials", "true");
//   res.setHeader(
//     "Access-Control-Allow-Origin",
//     "https://studio.apollographql.com"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Methods, Access-Control-Allow-Origin, Access-Control-Allow-Credentials, Access-Control-Allow-Headers"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "POST, GET, PUT, PATCH, DELETE, OPTIONS, HEAD"
//   );
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }

  await startServer;
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
});

export const config = {
  api: {
    bodyParser: false,
  },
};
