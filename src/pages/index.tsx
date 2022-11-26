import React from 'react';
import styles from '../styles/Home.module.css';
import HomePage from './lading-page';

import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession()
  if(session) {
    return <>
      <div className={styles.container}>
      <HomePage/>
    </div>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  }
  return <>
    Not signed in <br/>
    <button onClick={() => signIn()}>Sign in</button>
  </>
}

// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <HomePage/>
//     </div>
//   );
// }
