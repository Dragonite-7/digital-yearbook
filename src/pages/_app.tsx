import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import React from 'react';

export default function App({
  Component, pageProps: { session, ...pageProps }
}) {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    // uri: 'http://localhost:4000/graphql',
    uri:'https://api.spacex.land/graphql/'
    
  });
  return (
    <SessionProvider session={session}>
      <ApolloProvider client={client}>
        <Component {...pageProps}/>
      </ApolloProvider>
    </SessionProvider>
  )
}

