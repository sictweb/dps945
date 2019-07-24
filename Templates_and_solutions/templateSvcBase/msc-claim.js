
// Setup
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Entity schema
// We do not want an object identifier to be stored with a claim

var claimSchema = new Schema({
  type: String,
  value: String
}, { _id: false });

// Make schema available to the application
module.exports = claimSchema;
