const express = require("express");
const router = express.Router();
const MenuItem = require("../models/MenuItem");

// Get menu items by restaurant
router.get("/:restaurantId", async (req, res) => {
  try {
    const items = await MenuItem.find({ restaurant: req.params.restaurantId });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Add menu item (admin only)
router.post("/add", async (req, res) => {
  try {
    const { restaurant, name, description, price, image } = req.body;
    const newItem = new MenuItem({ restaurant, name, description, price, image });
    await newItem.save();
    res.status(201).json({ message: "Menu item added" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
