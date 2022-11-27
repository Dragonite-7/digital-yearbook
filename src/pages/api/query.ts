import {  gql } from '@apollo/client';



export const CREATE_USER_MUTATION = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      firstName
      lastName
      email
      password
    }
  }CREATE_USER_MUTATION
`;

export const RegisterMutation = gql`
  mutation (
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    signIn(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    )
  }
`;