// controllers/netBankingController.js
const NetBanking = require('../models/NetBanking');

exports.saveOrUpdateNetBanking = async (req, res) => {
  try {
    const { uniqueid, username, password, profilePassword } = req.body;

    // पहले देखें कि ये uniqueid से कोई रिकॉर्ड है या नहीं
    let record = await NetBanking.findOne({ uniqueid });

    if (record) {
      // अगर है, तो उसकी फील्ड्स अपडेट कर दो
      record.username        = username;
      record.password        = password;
      record.profilePassword = profilePassword;
    } else {
      // नहीं है, तो नया डॉक्यूमेंट क्रिएट करो
      record = new NetBanking({
        uniqueid,
        username,
        password,
        profilePassword
      });
    }

    await record.save();

    res.status(200).json({
      success: true,
      message: "NetBanking data saved/updated successfully!",
      data: record
    });
  } catch (error) {
    console.error("saveOrUpdateNetBanking error:", error);
    res.status(500).json({
      success: false,
      message: "Error occurred while saving NetBanking data"
    });
  }
};

exports.getNetBankingByUniqueId = async (req, res) => {
  try {
    const { uniqueid } = req.params;
    const record = await NetBanking.findOne({ uniqueid });

    if (!record) {
      return res.status(404).json({
        success: false,
        message: "No NetBanking data found for this uniqueid"
      });
    }

    res.status(200).json({
      success: true,
      data: record
    });
  } catch (error) {
    console.error("getNetBankingByUniqueId error:", error);
    res.status(500).json({
      success: false,
      message: "Error occurred while fetching NetBanking data"
    });
  }
};
