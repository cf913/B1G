let mongoose = require('mongoose')
let Schema = mongoose.Schema
let mongooseValidator = require('mongoose-unique-validator')

let schema = new Schema({
  content: {type: String, required: true},
  author: {type: String, unique: true},
})

schema.plugin(mongooseValidator)
module.exports = mongoose.model('Post', schema)
