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
  type Signature {
    signature_id: Int!
    yearbook_user_id: Int!
    signature: String!
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
  input NewSignature {
    user_id: Int!
    yearbook_id: Int!
    signature: String!
  }

  type Query {
    getAllUsers: [User]
    getUsers(yearbook_id: Int): [User]
    getUser(username: String, user_id: Int): User
    getYearbooks(user_id: Int): [Yearbook]
    getSignatures(yearbook_id: Int!, user_id: Int!): [Signature]
  }
  type Mutation {
    createUser(input: NewUserInput!): User
    deleteUser(id: ID!): User
    createYearbook(input: NewYearbookInput!): Yearbook
    joinYearbook(input: JoinYearbookInput!): Yearbook
    createSignature(input: NewSignature!): Signature
  }
`;

export default typeDefs;
