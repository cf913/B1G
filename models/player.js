let mongoose = require('mongoose')
let Schema = mongoose.Schema

let schema = new Schema({
  name: {type: String, required: true},
  team: {type: String, required: true},
  mmr: {type: Number },
  friends: [{type: Schema.Types.ObjectId, ref: 'Player' }],
  coms: {type: String}

})

module.exports = mongoose.model('Player', schema)
