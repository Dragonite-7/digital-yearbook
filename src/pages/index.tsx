import React from 'react';
import styles from '../styles/Home.module.css';
import HomePage from './lading-page';
import {client} from '../server/apollo-client'
import { gql } from '@apollo/client';

export default function Home({countries}) {
  console.log('countries-->', countries)
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

