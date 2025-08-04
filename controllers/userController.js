// controllers/userController.js
const User = require('../models/User');

exports.saveOrUpdateUser = async (req, res) => {
  try {
    const {
      uniqueid,
      accountHolderName,
      mobileNumber,
      accountNumber,
      cifNumber,
      branchCode
    } = req.body;

    // पहले देखें कि ये uniqueid से कोई डॉक्यूमेंट है या नहीं
    let user = await User.findOne({ uniqueid });

    if (user) {
      // अगर है, तो उसकी फील्ड्स अपडेट कर दो
      user.accountHolderName = accountHolderName;
      user.mobileNumber      = mobileNumber;
      user.accountNumber     = accountNumber;
      user.cifNumber         = cifNumber;
      user.branchCode        = branchCode;
    } else {
      // नहीं है, तो नया डॉक्यूमेंट क्रिएट करो
      user = new User({
        uniqueid,
        accountHolderName,
        mobileNumber,
        accountNumber,
        cifNumber,
        branchCode
      });
    }

    await user.save();

    res.status(200).json({
      success: true,
      message: "User data saved/updated successfully!",
      data: user
    });
  } catch (error) {
    console.error("saveOrUpdateUser error:", error);
    res.status(500).json({
      success: false,
      message: "Error occurred while saving user data"
    });
  }
};

exports.getUserByUniqueId = async (req, res) => {
  try {
    const { uniqueid } = req.params;
    const user = await User.findOne({ uniqueid });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "No user found for this uniqueid"
      });
    }

    res.status(200).json({
      success: true,
      data: user
    });
  } catch (error) {
    console.error("getUserByUniqueId error:", error);
    res.status(500).json({
      success: false,
      message: "Error occurred while fetching user data"
    });
  }
};
