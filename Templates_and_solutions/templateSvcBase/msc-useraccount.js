
// Setup
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// Embedded document(s)
var Claim = require('./msc-claim');

// Entity schema

var useraccountSchema = new Schema({
	userName: { type: String, unique: true },
	fullName: String,
	password: String,
	statusActivated: Boolean,
	statusLocked: Boolean,
	roles: [String],
  claims: [Claim]
});

// Make schema available to the application
module.exports = useraccountSchema;
