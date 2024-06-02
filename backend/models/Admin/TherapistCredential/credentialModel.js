const mongoose = require('mongoose');

const CredentialSchema = new mongoose.Schema({
  therapistEmail: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Credential', CredentialSchema);