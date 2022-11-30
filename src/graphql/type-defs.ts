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
    getUsers: [User]!
  }
  input NewUserInput {
    username: String!
    password: String!
    display_name: String!
    picture_url: String!
  }
  type Mutation {
    createUser(input: NewUserInput!): User
    deleteUser(id: ID!): User
  }
`;
export {}; // needed because typescript is dumb
module.exports = typeDefs;
// export default typeDefs;
// updateUsername(input: UpdateUsernameInput!): User
