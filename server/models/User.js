var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt')
var datasetSchema = require('./dataset')

var UserSchema = new Schema({
    email: {
      type: String,
      unique: true
    },
    username: String,
    password: {
      type: String,
      minlength: 6
    },
    admin: {
      type: Boolean,
      default: false
    },
    datasets: [datasetSchema]
})

UserSchema.pre('save', function (next) {
  const user = this;
  if (user.isModified('password') || user.isNew) {
    bcrypt.genSalt(10, (error, salt) => {
    if (error) return next(error);
    bcrypt.hash(user.password, salt, (error, hash) => {
      if (error) return next(error);
        user.password = hash;
        next();
      });
    });
  } else {
    return next();
  }
});

module.exports = mongoose.model('User', UserSchema);