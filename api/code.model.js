// code.model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for codes
let Code = new Schema({
  code: {
    type: String
  },
  winner: {
    type: Boolean
  },
  prize: {
    type: String
  }
},{
    collection: 'codes'
});

module.exports = mongoose.model('Code', Code);