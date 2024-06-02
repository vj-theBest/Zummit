const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
  email: { type: String, required: true },
  dailyCredentialsLimit: { type: Number, default: 5 }
});

module.exports = mongoose.model('Admin', AdminSchema);