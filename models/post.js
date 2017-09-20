let mongoose = require('mongoose')
let Schema = mongoose.Schema
let User = require('./user')

let schema = new Schema({
  content: {type: String, required: true},
  author: {type: Schema.Types.ObjectId, ref: 'User'}
})

schema.post('remove', (post) => {
  User.findById(post.author, (err, user) => {
    user.posts.pull(post._id)
    user.save()
  })
})

module.exports = mongoose.model('Post', schema)
