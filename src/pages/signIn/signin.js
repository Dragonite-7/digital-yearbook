import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react'

export default function SignInAuth() {
  const { data: session } = useSession()
  if(session) {
    console.log(session)
    return <>
    <p> Welcome, {session.user.name}</p>
      Signed in as {session.user.email} 
      <br/>
      <img 
      src={session.user.image} 
      alt=''
      style={{width: '75px', borderRadius: '50px'}} 
      />
      <button onClick={() => signOut()}>Sign out</button>
    </>
  }
  return <>
    Not signed in <br/>
    <button onClick={() => signIn('github')}>Sign in with Github</button>
  </>
}

// import { signIn } from 'next-auth/react'

// export default function SignInAuth({ providers }) {
//   return (
//     <div style={{display:'flex', justifyContent: 'space-around', margin: 10}}>
//       {Object.values(providers).map((provider) => (
//         <div key={provider.name} >
//           <button onClick={() => signIn(provider.id)} style={{padding: 8, cursor:'pointer'}}>
//             Sign in with {provider.name}
//           </button>
//         </div>
//       ))}
//     </div>
//   )
// }

