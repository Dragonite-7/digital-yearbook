import NextAuth from 'next-auth'
import TwitterProvider from 'next-auth/providers/Twitter'
import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from 'next-auth/providers/email'

export default NextAuth({
  providers: [
    // OAuth authentication providers...
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
    // Passwordless / email sign in
    EmailProvider({
      server: process.env.MAIL_SERVER,
      from: 'NextAuth.js <no-reply@example.com>'
    }),
    TwitterProvider({
        clientId: process.env.TWITTER_CLIENT_ID,
        clientSecret: process.env.TWITTER_CLIENT_SECRET,
        version: "2.0",
    }),
  
  ]
})