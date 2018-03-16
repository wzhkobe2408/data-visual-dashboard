const mongoose = require('mongoose')
const config = require('../config')

mongoose.connect(config.database)
mongoose.Promise = global.Promise

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('database connected...')
});