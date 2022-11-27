import {  gql } from '@apollo/client';
const { ApolloServer } = require('apollo-server-express');
const { buildFederatedSchema } = require('@apollo/federation');
import {db} from '../../server/data/db'
const jwt = require('jsonwebtoken');

const { accounts } = require('../data');
const { permissions } = require('./permissions');

const port = 4001;

const resolvers = {
  Account: {
    __resolveReference(object) {
      return accounts.find(account => account.id === object.id);
    }
  },
  Query: {
    account(parent, { id }) {
      return accounts.find(account => account.id === id);
    },
    accounts() {
      return accounts;
    },
    viewer(parent, args, { user }) {
      return accounts.find(account => account.id === user.sub);
    }
  },
  Mutation: {
    login(parent, { email, password }) {
      const { id, permissions, roles } = accounts.find(
        account => account.email === email && account.password === password
      );
      return jwt.sign(
        { 'https://awesomeapi.com/graphql': { roles, permissions } },
        'f1BtnWgD3VKY',
        { algorithm: 'HS256', subject: id, expiresIn: '1d' }
      );
    }
  }
};

const server = new ApolloServer({
//   schema: applyMiddleware(
//     buildFederatedSchema([{ typeDefs, resolvers }]),
//     permissions
//   ),
  context: ({ req }) => {
    const user = req.headers.user ? JSON.parse(req.headers.user) : null;
    return { user };
  }
});

server.listen({ port }).then(({ url }) => {
  console.log(`Accounts service ready at ${url}`);
});

