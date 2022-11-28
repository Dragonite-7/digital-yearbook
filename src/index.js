
// import typeDefs from './graphql/type-defs'
// import  resolvers  from './graphql/resolvers';
// import {getUsers} from './server/controllers/user.controllers';
import { pool } from './server/data/db';
import { v4 as uuidv4 } from 'uuid';
const { ApolloServer,gql  } = require('apollo-server');

const typeDefs = gql`
  type User {
    user_id: Int!
    username: String!
    password: String!
    display_name: String!
    picture_url: String!
  }
  type Query {
    users: [User]!
  }

  input CreateUserInput {
    username: String!
    password: String!
    display_name: String!
    picture_url: String!
  }
  
  type Mutation {
    createUser(input: CreateUserInput!): User
    deleteUser(id: ID!): User
  }
`;
const resolvers = {
  Query: {
    users: async () => console.log('get Users'), //getUsers()
  },
  Mutation : {
    createUser: async( req ) => {
      console.log('req -->', req.body)
      const {username,password,display_name, picture_url} = req.body;
      const query = {
        text: 'INSERT INTO users(username,password, display_name,  picture_url) VALUES($1, $2, $3, $4)',
        values: [username,password, display_name, picture_url],
      };
      const response = await pool.query(query,[uuidv4(),username,password, display_name, picture_url]);
      console.log('response-->', response)
      return response // 'Successfully created!';
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});



