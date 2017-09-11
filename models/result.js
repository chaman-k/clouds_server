var mongoose = require('mongoose');

var resultSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: true
  },
  studentName1: {
    type: String,
    required: true
  },
  studentClass1: {
    type: String,
    required: true
  },
  studentName2: {
    type: String,
    required: true
  },
  studentClass2: {
    type: String,
    required: true
  },
  studentName3: {
    type: String,
    required: true
  },
  studentClass3: {
    type: String,
    required: true
  }
});

var result = module.exports =  mongoose.model('result', resultSchema);
