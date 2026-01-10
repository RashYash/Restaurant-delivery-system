const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  address: String,
  image: String, // optional image URL
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
