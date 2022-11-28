const { gql } = require('apollo-server');

export const typeDefs = gql`
  type User {
    id: String
    first_name: string
    last_name: string
    email: string
    password: string
    profile_picture: string
  }

  type Query {
    users: [User]
  }
`;
