var mongoose = require('mongoose');

var albumSchema = new mongoose.Schema({
    albumName: {
      type: String
    },
    cover: {
      type: String
    },
    description: {
      type: String
    }
});

var album = module.exports = mongoose.model('album', albumSchema);
