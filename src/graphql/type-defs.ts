const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    user_id: Int!
    username: String!
    password: String!
    display_name: String!
    picture_url: String!
  }
  type Yearbook {
    yearbook_id: Int!
    year: String!
    yearbook_name: String!
    join_code: String!
    color: String!
  }

  input NewUserInput {
    username: String!
    password: String!
    display_name: String!
    picture_url: String!
  }
  input NewYearbookInput {
    year: String!
    yearbook_name: String!
    join_code: String!
    user_id: Int!
    color: String!
  }
  input JoinYearbookInput {
    join_code: String!
    user_id: Int!
  }

  type Query {
    getAllUsers: [User]
    getUsers(yearbook_id: Int): [User]
    getUser(username: String, user_id: Int): User
    getYearbooks(user_id: Int): [Yearbook]
  }
  type Mutation {
    createUser(input: NewUserInput!): User
    deleteUser(id: ID!): User
    createYearbook(input: NewYearbookInput!): Yearbook
    joinYearbook(input: JoinYearbookInput!): Yearbook
  }
`;

export default typeDefs;
