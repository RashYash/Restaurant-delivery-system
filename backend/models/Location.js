const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  address: String,
  latitude: Number,
  longitude: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Location", locationSchema);
