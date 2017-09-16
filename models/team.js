let mongoose = require('mongoose')
let Schema = mongoose.Schema

let schema = new Schema({
  name: {type: String, required: true},
  players: [{type: Schema.Types.ObjectId, ref: 'Player'}],
  subs: [{type: Schema.Types.ObjectId, ref: 'Player' }],
  average_mmr: {type: Number}
})

module.exports = mongoose.model('Team', schema)
