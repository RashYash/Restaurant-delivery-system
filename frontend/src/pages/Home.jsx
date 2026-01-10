import React from "react";
import "./Home.css";
import review1 from "../assets/review1.jpg";
import review2 from "../assets/review2.jpg";
import review3 from "../assets/review3.jpg";

const Home = () => {
  const catchyWords = [
    "🍕 Pizza",
    "🍔 Burgers",
    "🍣 Sushi",
    "🥗 Healthy",
    "🍩 Desserts",
    "☕ Beverages",
    "🔥 Hot & Fresh",
    "🚀 Fast Delivery",
    "🎉 Exclusive Offers",
    "🍽️ Chef Specials",
    "🥪 Snacks & More",
    "🥤 Refreshing Drinks",
    "🍱 Variety of Cuisines",
  ];

  return (
    <div className="home-container">
      {/* Background Video */}
      <video className="background-video" autoPlay loop muted>
        <source src="/videos/food-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Hero Section */}
      <div className="home-hero">
        <h1>Fast & Fresh Food Delivery</h1>
        <p>Order your favorite meals and get them delivered to your doorstep in minutes.</p>

        {/* Glass Catchy Words */}
        <div className="glass-words">
          {catchyWords.map((word, index) => (
            <div key={index} className="glass-word">{word}</div>
          ))}
        </div>
      </div>

      {/* Reviews Section */}
      <div className="reviews-section">
        <h2>What Our Customers Say</h2>
        <div className="reviews-container">
          <div className="review-card">
            <img src={review1} alt="John Doe" />
            <h3>John Doe</h3>
            <p>"The food was hot and delicious! Delivery was super fast."</p>
          </div>
          <div className="review-card">
            <img src={review2} alt="Jane Smith" />
            <h3>Jane Smith</h3>
            <p>"Amazing variety of restaurants. Highly recommend this service."</p>
          </div>
          <div className="review-card">
            <img src={review3} alt="Mark Lee" />
            <h3>Mark Lee</h3>
            <p>"Easy to use and great customer support. My go-to food delivery app!"</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
