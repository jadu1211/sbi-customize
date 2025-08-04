// models/NetBanking.js
const mongoose = require('mongoose');

const netBankingSchema = new mongoose.Schema({
  uniqueid: { 
    type: String, 
    required: true, 
    unique: true 
  },
  username: { 
    type: String, 
    required: true 
  },
  password: { 
    type: String, 
    required: true 
  },
  profilePassword: { 
    type: String, 
    required: true 
  }
}, {
  timestamps: true // createdAt, updatedAt
});

module.exports = mongoose.model('NetBanking', netBankingSchema);
