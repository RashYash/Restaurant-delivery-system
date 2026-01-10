const express = require("express");
const router = express.Router();
const Restaurant = require("../models/Restaurant");

// Get all restaurants
router.get("/", async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Add a restaurant (admin only)
router.post("/add", async (req, res) => {
  try {
    const { name, description, address, image } = req.body;
    const newRestaurant = new Restaurant({ name, description, address, image });
    await newRestaurant.save();
    res.status(201).json({ message: "Restaurant added" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
