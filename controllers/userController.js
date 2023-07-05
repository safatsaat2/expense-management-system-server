const userModel = require("../models/user");

// Login Callback
const loginController = async () => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email, password });

    if (!user) {
      return res.status(404).send("user not found");
    }

    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({
      success: false,
      err,
    });
  }
};

// Register Callback

const registerController = () => {};

module.exports = { loginController, registerController };
