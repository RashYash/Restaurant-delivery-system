const mongoose = require("mongoose");
require("dotenv").config();
const Restaurant = require("./models/Restaurant");
const MenuItem = require("./models/MenuItem");

mongoose.connect(process.env.MONGO_URI).then(async () => {
  console.log("MongoDB connected");

  const restaurants = await Restaurant.find();
  const menuItems = [];

  restaurants.forEach((r) => {

    // 🍕 Pizza Planet
    if (r.name === "Pizza Planet") {
      menuItems.push(
        {
          restaurant: r._id,
          name: "Cheese Pizza",
          description: "Classic cheese pizza with mozzarella",
          price: 5.99,
          image: "https://images.unsplash.com/photo-1601924582975-9b43ef9bdb8f",
        },
        {
          restaurant: r._id,
          name: "Pepperoni Pizza",
          description: "Pepperoni pizza with extra cheese",
          price: 6.99,
          image: "https://images.unsplash.com/photo-1628840042765-356cda07504e",
        }
      );
    }

    // 🍔 Burger Hub
    if (r.name === "Burger Hub") {
      menuItems.push(
        {
          restaurant: r._id,
          name: "Cheese Burger",
          description: "Juicy beef burger with cheddar cheese",
          price: 6.49,
          image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
        },
        {
          restaurant: r._id,
          name: "Veggie Burger",
          description: "Healthy veggie burger",
          price: 4.99,
          image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
        }
      );
    }

    // 🍣 Sushi World
    if (r.name === "Sushi World") {
      menuItems.push(
        {
          restaurant: r._id,
          name: "Salmon Sushi",
          description: "Fresh salmon sushi rolls",
          price: 7.99,
          image: "https://images.unsplash.com/photo-1562158070-9b6b7c5b1476",
        },
        {
          restaurant: r._id,
          name: "California Roll",
          description: "Crab and avocado roll",
          price: 6.99,
          image: "https://images.unsplash.com/photo-1617196030536-b3bbad29417b",
        }
      );
    }

    // 🥗 Healthy Bites
    if (r.name === "Healthy Bites") {
      menuItems.push(
        {
          restaurant: r._id,
          name: "Green Salad",
          description: "Fresh mixed green salad",
          price: 4.49,
          image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d",
        },
        {
          restaurant: r._id,
          name: "Fruit Smoothie",
          description: "Fresh fruit smoothie",
          price: 3.99,
          image: "https://images.unsplash.com/photo-1571079336898-7b2c3c1c10a1",
        }
      );
    }

    // 🍰 Sweet Treats
    if (r.name === "Sweet Treats") {
      menuItems.push(
        {
          restaurant: r._id,
          name: "Chocolate Cake",
          description: "Rich chocolate cake",
          price: 3.99,
          image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
        },
        {
          restaurant: r._id,
          name: "Donut",
          description: "Soft glazed donut",
          price: 2.49,
          image: "https://images.unsplash.com/photo-1551024601-bec78aea704b",
        }
      );
    }

    // ☕ Coffee Corner
    if (r.name === "Coffee Corner") {
      menuItems.push(
        {
          restaurant: r._id,
          name: "Cappuccino",
          description: "Hot cappuccino with milk foam",
          price: 2.99,
          image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
        },
        {
          restaurant: r._id,
          name: "Latte",
          description: "Smooth latte coffee",
          price: 3.49,
          image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
        }
      );
    }

    // 🍝 Pasta House
    if (r.name === "Pasta House") {
      menuItems.push(
        {
          restaurant: r._id,
          name: "Spaghetti Bolognese",
          description: "Classic Italian meat sauce pasta",
          price: 7.99,
          image: "https://images.unsplash.com/photo-1603133872874-3f8c3f2dbf29",
        },
        {
          restaurant: r._id,
          name: "Alfredo Pasta",
          description: "Creamy white sauce pasta",
          price: 7.49,
          image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9",
        }
      );
    }

    // 🌮 Taco Fiesta
    if (r.name === "Taco Fiesta") {
      menuItems.push(
        {
          restaurant: r._id,
          name: "Chicken Taco",
          description: "Spicy grilled chicken taco",
          price: 4.99,
          image: "https://images.unsplash.com/photo-1601924638867-3ec4e1f8b2fa",
        },
        {
          restaurant: r._id,
          name: "Beef Taco",
          description: "Mexican-style beef taco",
          price: 5.49,
          image: "https://images.unsplash.com/photo-1615870216519-2f9fa575fa6c",
        }
      );
    }

    // 🦐 Seafood Delight
    if (r.name === "Seafood Delight") {
      menuItems.push(
        {
          restaurant: r._id,
          name: "Grilled Prawns",
          description: "Fresh grilled prawns",
          price: 9.99,
          image: "https://images.unsplash.com/photo-1600891964576-8b877e50bb0b",
        },
        {
          restaurant: r._id,
          name: "Fish Curry",
          description: "Sri Lankan spicy fish curry",
          price: 8.49,
          image: "https://images.unsplash.com/photo-1604909053191-3b89b91f0f7c",
        }
      );
    }

    // 🌱 Vegan Vibes
    if (r.name === "Vegan Vibes") {
      menuItems.push(
        {
          restaurant: r._id,
          name: "Vegan Bowl",
          description: "Plant-based healthy bowl",
          price: 6.49,
          image: "https://images.unsplash.com/photo-1589308078057-03b0d2bff43b",
        },
        {
          restaurant: r._id,
          name: "Tofu Stir Fry",
          description: "Tofu with vegetables",
          price: 6.99,
          image: "https://images.unsplash.com/photo-1604908177225-6f41f5bbcd99",
        }
      );
    }
  });

  await MenuItem.insertMany(menuItems);
  console.log("Menu items seeded successfully");
  mongoose.connection.close();
});
