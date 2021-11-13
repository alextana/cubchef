const Post = require('../../models/Post')

module.exports = {
  Query: {},
  Mutation: {
    async createPost(
      _,
      { postInput: { title, content, isActive, publishedBy } }
    ) {
      try {
        const newPost = new Post({
          title,
          content,
          isActive,
          publishedBy,
          createdAt: new Date().toISOString(),
        })
        const res = await newPost.save()

        return res
      } catch (error) {
        console.error('something went wrong', error)
      }
    },
  },
}
