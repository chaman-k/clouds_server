var mongoose = require('mongoose');

var imageSchema = new mongoose.Schema({
  albumName: {
    type: String
  },
  link: {
    type: String
  },
  display: {
    type: Boolean
  }
});

var image = module.exports = mongoose.model('image',imageSchema);
