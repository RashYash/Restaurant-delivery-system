// ----------------------
// 1️⃣ IMPORT PACKAGES
// ----------------------
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const admin = require("firebase-admin");

// ----------------------
// 2️⃣ FIREBASE ADMIN INIT
// ----------------------
const serviceAccount = require("./firebase-admin.json"); // Your downloaded service account

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// ----------------------
// 3️⃣ INIT APP
// ----------------------
const app = express();

// ----------------------
// 4️⃣ MIDDLEWARES
// ----------------------
app.use(cors());
app.use(express.json());

// ----------------------
// 5️⃣ IMPORT MODELS
// ----------------------
const Location = require("./models/Location");
const User = require("./models/User");
const Restaurant = require("./models/Restaurant");
const MenuItem = require("./models/MenuItem");

// ----------------------
// 6️⃣ AUTH MIDDLEWARE
// ----------------------
const verifyFirebaseToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

// ----------------------
// 7️⃣ ROUTES
// ----------------------

// 7a. Test Route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// 7b. Location Routes
app.post("/api/location/save", verifyFirebaseToken, async (req, res) => {
  try {
    const { address, latitude, longitude } = req.body;

    const newLocation = new Location({ address, latitude, longitude });
    await newLocation.save();

    res.status(201).json({ message: "Location saved successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to save location", error });
  }
});

// 7c. Auth Route (Save user after Firebase login)
app.post("/api/auth/login", verifyFirebaseToken, async (req, res) => {
  try {
    const { uid, email, name } = req.user;

    let user = await User.findOne({ uid });
    if (!user) {
      user = new User({ uid, email, name });
      await user.save();
    }

    res.json({ message: "User authenticated", user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// 7d. Restaurant Routes
app.get("/api/restaurants", async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

app.post("/api/restaurants/add", async (req, res) => {
  try {
    const { name, description, address, image } = req.body;
    const newRestaurant = new Restaurant({ name, description, address, image });
    await newRestaurant.save();
    res.status(201).json({ message: "Restaurant added" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// 7e. Menu Routes
app.get("/api/menu/:restaurantId", async (req, res) => {
  try {
    const items = await MenuItem.find({ restaurant: req.params.restaurantId });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

app.post("/api/menu/add", async (req, res) => {
  try {
    const { restaurant, name, description, price, image } = req.body;
    const newItem = new MenuItem({ restaurant, name, description, price, image });
    await newItem.save();
    res.status(201).json({ message: "Menu item added" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// ----------------------
// 8️⃣ CONNECT MONGODB
// ----------------------
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// ----------------------
// 9️⃣ START SERVER
// ----------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
