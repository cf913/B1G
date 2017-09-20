let mongoose = require('mongoose')
let Schema = mongoose.Schema
let mongooseUniqueValidator = require('mongoose-unique-validator')


let schema = new Schema({
  username: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  posts: [{type: Schema.Types.ObjectId, ref: 'Post'}]
})

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', schema)
