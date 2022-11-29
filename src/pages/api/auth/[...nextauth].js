import NextAuth from 'next-auth'
import TwitterProvider from 'next-auth/providers/Twitter'
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from 'next-auth/providers/github'
require('dotenv').config();

export const authOptions = ({
  secret: process.env.SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
      version: '2.0',
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    })
  ], 
  database: process.env.DATABASE_URL,
  pages:{
    signIn: '/signIn',
  }
})

export default NextAuth(authOptions)