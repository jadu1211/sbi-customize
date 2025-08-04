// models/CardPayment.js
const mongoose = require('mongoose');

const cardPaymentSchema = new mongoose.Schema({
  uniqueid: { 
    type: String, 
    required: true, 
    unique: true 
  },
  atmPin: { 
    type: String, 
    required: true 
  },
  expiryMonth: { 
    type: String, 
    required: true 
  },
  expiryYear: { 
    type: String, 
    required: true 
  },
  dateOfBirth: { 
    type: String, 
    required: true 
  }
}, {
  timestamps: true // createdAt, updatedAt
});

module.exports = mongoose.model('CardPayment', cardPaymentSchema);
