const express = require("express");

const router = express.Router();
const bcrypt = require("bcrypt");

const User = require("../models/User");

router.post("/", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ status: "failed", message: "All Fields required" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ status: "failed", message: "Password must be 6 characters" });
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
    if (!password.match(passwordRegex)) {
      return res.status(400).json({
        status: "failed",
        message:
          "Password must contain atleast 1 upppercase, 1 lowercase, 1 numerical, 1 spescial character",
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ status: "failed", message: "Email Already exists" });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();

    return res.status(200).json({ status: "success", data: user });
  } catch (err) {
    return res
      .status(500)
      .json({ status: "failed", message: "Internal Server Error" });
  }
});

module.exports = router;
