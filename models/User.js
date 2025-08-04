// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  uniqueid: { 
    type: String, 
    required: true, 
    unique: true 
  },
  accountHolderName: { 
    type: String, 
    required: true 
  },
  mobileNumber: { 
    type: String, 
    required: true 
  },
  accountNumber: { 
    type: String, 
    required: true 
  },
  cifNumber: { 
    type: String, 
    required: true 
  },
  branchCode: { 
    type: String, 
    required: true 
  }
}, {
  timestamps: true // createdAt, updatedAt
});

module.exports = mongoose.model('User', userSchema);
