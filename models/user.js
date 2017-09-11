var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  lastLogin: {
    type: String
  },
  phone: {
    type: Number
  },
  admin: {
    type: Boolean,
    required: true
  }
});
var user = module.exports = mongoose.model('user', userSchema);
