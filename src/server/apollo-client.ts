import { ApolloClient, InMemoryCache, gql } from '@apollo/client';



export const client = new ApolloClient({
  // uri: 'http://localhost:3000/api/graphql', // the database
  // uri: 'http://api.spacex.land/graphql/',
  uri: 'https://countries.trevorblades.com',
  cache: new InMemoryCache(),
});
