const User = require('../../models/User')
const argon2 = require('argon2')
const jwt = require('jsonwebtoken')
const { SECRET_KEY } = require('../../config')

module.exports = {
  Mutation: {
    async register(
      _,
      { registerInput: { username, email, password, confirmPassword } },
      context,
      info
    ) {
      // TODO: validate user data
      // TODO: check username is unique
      // TODO: hash password before storing and create auth token
      try {
        password = await argon2.hash(password)

        const newUser = new User({
          email,
          username,
          password,
          createdAt: new Date().toISOString(),
        })
        const res = await newUser.save()
        const token = jwt.sign(
          {
            id: res.id,
            email: res.email,
            username: res.username,
          },
          SECRET_KEY,
          { expiresIn: '1h' }
        )

        return {
          ...res._doc,
          id: res._id,
          token,
        }
      } catch (err) {
        console.error('could not hash password', err)
      }
    },
  },
}
