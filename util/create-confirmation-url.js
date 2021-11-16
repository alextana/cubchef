const jwt = require('jsonwebtoken')
const { SECRET_KEY } = require('../config')

async function createConfirmationUrl(userId) {
  const token = await jwt.sign({userId}, SECRET_KEY, {
    expiresIn:'1d'
  })

  return `http://localhost:3000/user/confirm/${token}`
}

module.exports.createConfirmationUrl = createConfirmationUrl
