const express = require("express");
const router = express.Router();
const User = require("../models/User");
const verifyFirebaseToken = require("../middleware/authMiddleware");

router.post("/login", verifyFirebaseToken, async (req, res) => {
  try {
    const { uid, email, name } = req.user;

    let user = await User.findOne({ uid });

    if (!user) {
      user = new User({
        uid,
        email,
        name,
      });
      await user.save();
    }

    res.json({
      message: "User authenticated",
      user,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
