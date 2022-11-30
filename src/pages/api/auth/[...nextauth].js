import NextAuth from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
require('dotenv').config();

export const authOptions = ({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    })
  ], 
  secret: process.env.JWT_SECRET,
})

export default NextAuth(authOptions)