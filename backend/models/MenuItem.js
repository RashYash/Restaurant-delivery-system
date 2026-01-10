const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema({
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurant" },
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  image: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("MenuItem", menuItemSchema);
