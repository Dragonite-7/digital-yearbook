import React from 'react';
import styles from '../styles/Home.module.css';
import HomePage from './lading-page';
import {client} from '../server/apollo-client'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { useEffect } from 'react'
import io from 'Socket.IO-client';

let socket;

export default function Home({countries}) {
  useEffect(() => {
    socketInitializer()
  }, []);

  const socketInitializer = async () => {
    await fetch('/api/socket');
    socket = io();

    socket.on('connect', () => {
      console.log('connected');
    })
  }

  console.log('countries-->', countries);
  return (
    <div className={styles.container}>
      <HomePage/>
    </div>
  );
}

export async function getStaticProps() {
  const { data} = await client.query({
    query: gql`
      query Countries {
        countries {
          code
          name
          emoji
        }
      }
    `,
  });
  return {
    props: {
      countries: data.countries.slice(0,4)
    }
  }
}
