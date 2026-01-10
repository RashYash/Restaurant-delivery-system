const mongoose = require("mongoose");
require("dotenv").config();
const Restaurant = require("./models/Restaurant");

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("MongoDB connected");

  const restaurants = [
    {
      name: "Pizza Planet",
      description: "Best pizza in town",
      address: "Colombo 7",
      image: "https://via.placeholder.com/200",
    },
    {
      name: "Burger Hub",
      description: "Delicious burgers",
      address: "Colombo 3",
      image: "https://via.placeholder.com/200",
    },
    {
      name: "Sushi World",
      description: "Fresh sushi and rolls",
      address: "Colombo 1",
      image: "https://via.placeholder.com/200",
    },
    {
      name: "Healthy Bites",
      description: "Salads, smoothies, and healthy meals for your lifestyle.",
      address: "Colombo 6",
      image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Sweet Treats",
      description: "Cakes, donuts, and desserts for your sweet tooth.",
      address: "Colombo 2",
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Coffee Corner",
      description: "Cappuccinos, lattes, and all your coffee favorites.",
      address: "Colombo 1",
      image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Pasta House",
      description: "Authentic Italian pasta with rich sauces and flavors.",
      address: "Colombo 4",
      image: "https://images.unsplash.com/photo-1603133872874-3f8c3f2dbf29?auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Taco Fiesta",
      description: "Spicy tacos and Mexican street food to satisfy cravings.",
      address: "Colombo 5",
      image: "https://images.unsplash.com/photo-1617196030536-b3bbad29417b?auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Seafood Delight",
      description: "Fresh seafood dishes, grilled and cooked to perfection.",
      address: "Colombo 2",
      image: "https://images.unsplash.com/photo-1600891964576-8b877e50bb0b?auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Vegan Vibes",
      description: "Plant-based meals that are both healthy and tasty.",
      address: "Colombo 6",
      image: "https://images.unsplash.com/photo-1589308078057-03b0d2bff43b?auto=format&fit=crop&w=800&q=60",
    },
  ];

  Restaurant.insertMany(restaurants)
    .then(() => {
      console.log("Restaurants seeded successfully");
      mongoose.connection.close();
    })
    .catch((err) => {
      console.log("Error seeding restaurants:", err);
    });
});
