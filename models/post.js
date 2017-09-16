let mongoose = require('mongoose')
let Schema = mongoose.Schema
let mongooseValidator = require('mongoose-unique-validator')

let schema = new Schema({
  content: {type: String, required: true},
  author: {type: Schema.Types.ObjectId, ref: 'Team', unique: true}
})

schema.plugin(mongooseValidator)
module.exports = mongoose.model('Post', schema)
