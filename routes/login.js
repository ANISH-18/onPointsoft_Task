const express = require("express");
const User = require("../models/User");
const router = express.Router();

router.post("/", async (req, res) => {
  const { email, password } = req.body;
  try {
    //checking if body is empty
    if (!email || !password) {
      return res
        .status(400)
        .json({ status: "failed", message: "All fields required" });
    }

    //checking if email already exist
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(401)
        .json({ status: "failed", message: "Invalid Email and Password" });
    }

    //comparing password with User model
    const passwordMatch = await user.comparePassword(password);

    if (!passwordMatch) {
      return res
        .status(401)
        .json({ status: "failed", message: "Invalid Email or Password" });
    }

    //response if checks are done
    res
      .status(200)
      .json({ status: "success", message: "Authentication successful" });
  } catch (err) {
    res
      .status(500)
      .json({ status: "failed", message: "Internal server error" });
  }
});

module.exports = router;
