let mongoose = require('mongoose')
let Schema = mongoose.Schema

let schema = new Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  playerId: {type: Schema.Types.ObjectId, ref: 'Player' }

})

module.exports = mongoose.model('User', schema)
