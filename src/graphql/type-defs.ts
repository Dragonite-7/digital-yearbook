const { gql } = require('apollo-server');

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
export default typeDefs;
// updateUsername(input: UpdateUsernameInput!): User
