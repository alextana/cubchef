const { gql } = require('apollo-server')

module.exports = gql`
  type User {
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
  }
  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }
  type Post {
    id: ID!
    title: String!
    content: String!
    isActive: Boolean!
    createdAt: String!
    publishedBy: String!
  }
  input PostInput {
    title: String!
    content: String!
    isActive: Boolean!
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    createPost(postInput: PostInput): Post!
  }
  type Query {
    getUsers: [User]
    getUser(userId: ID!): User
  }
`

// todo mutations
// get recipes
// createRecipe
// deleteRecipe
