var mongoose = require('mongoose');
var Schema = mongoose.Schema

var datasetSchema = new Schema({
  series: {
    type: Array,
    required: true
  },
  data: {
    type: Array,
    required: true
  },
  owner: { type: Schema.Types.ObjectId, ref: 'User' },
})

module.exports = mongoose.model('Dataset', datasetSchema)