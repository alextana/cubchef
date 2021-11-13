const usersResolvers = require('./users')
const postResolvers = require('./posts')

module.exports = {
  Query: {
    ...postResolvers.Query,
    ...usersResolvers.Query,
  },
  Mutation: {
    ...postResolvers.Mutation,
    ...usersResolvers.Mutation,
  },
}
