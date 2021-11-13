const { model, Schema } = require('mongoose')

const postSchema = new Schema({
  title: String,
  content: String,
  publishedBy: String,
  isActive: Boolean,
  createdAt: String,
  updatedAt: String,
})

module.exports = model('Post', postSchema)
