import React from 'react';
import styles from '../styles/Home.module.css';
import { useSession, signIn, signOut } from "next-auth/react"

export default function SignInAuth() {
  const { data: session } = useSession()
  console.log(session)
  if(session) {
    return <>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  }
  return <>
    Not signed in <br/>
    <button onClick={() => signIn()}>Sign in</button>
  </>
}

// import { getCsrfToken } from "next-auth/react"

// export default function SignIn({ csrfToken }) {
//   return (
//     <form method="post" action="/api/auth/signin/email">
//       <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
//       <label>
//         Email address
//         <input type="email" id="email" name="email" />
//       </label>
//       <button type="submit">Sign in with Email</button>
//     </form>
//   )
// }

// export async function getServerSideProps(context) {
//   const csrfToken = await getCsrfToken(context)
//   return {
//     props: { csrfToken },
//   }
// }