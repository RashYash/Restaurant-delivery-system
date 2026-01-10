const express = require("express");
const router = express.Router();
const Location = require("../models/Location");

router.post("/save", async (req, res) => {
  try {
    const { address, latitude, longitude } = req.body;

    const newLocation = new Location({
      address,
      latitude,
      longitude,
    });

    await newLocation.save();

    res.status(201).json({ message: "Location saved successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to save location" });
  }
});

module.exports = router;
