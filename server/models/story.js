var mongoose = require('mongoose');
var Schema = mongoose.Schema

var storySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  owner:{
    type: Schema.Types.ObjectId, 
    ref: 'User'
  }
})

module.exports = mongoose.model('Story',storySchema)