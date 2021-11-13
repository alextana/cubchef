const { ApolloServer } = require('apollo-server')
const gql = require('graphql-tag')
const mongoose = require('mongoose')
const { MONGODB } = require('./config.js')

const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

mongoose
  .connect(MONGODB, { useNewUrlPArser: true })
  .then(() => {
    return server.listen({ port: 6600 })
  })
  .then((res) => {
    console.log('Apollo server listening on ' + res.url)
  })
