var mongoose = require('mongoose');

var scoreboardSchema = new mongoose.Schema({
  class: {
    type: String
  },
  category1: {
    type: String
  },
  category2: {
    type: String
  },
  category3: {
    type: String
  },
  category4: {
    type: String
  },
  category5: {
    type: String
  },
  category6: {
    type: String
  },
  total: {
    type: String
  }
});

var scoreboard = module.exports = mongoose.model('scoreboard',scoreboardSchema);
