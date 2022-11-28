
// import typeDefs from './graphql/type-defs'
// import  resolvers  from './graphql/resolvers';
// import {getUsers} from './server/controllers/user.controllers';
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  host:'localhost', 
  database: 'digitalYearBook',
  password : process.env.DB_PASSWORD,
  port: 5432
})

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
      const response = await pool.query(query,[username,password, display_name, picture_url]);
      console.log('response-->', response)
      return response // 'Successfully created!';
    }
  }
};
console.log('resolvers-->', resolvers.Mutation)

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});



