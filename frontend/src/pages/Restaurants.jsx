import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Restaurants.css";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const carouselRef = useRef();

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/restaurants");
        setRestaurants(res.data);
      } catch (err) {
        console.error("Error fetching restaurants:", err);
        setError("Failed to load restaurants. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchRestaurants();
  }, []);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  if (loading) return <p>Loading restaurants...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="restaurant-page">
      <h2>Restaurants Near You</h2>
      <div className="carousel-wrapper">
        <button className="arrow left-arrow" onClick={scrollLeft}>
          &#10094;
        </button>
        <div className="restaurant-carousel" ref={carouselRef}>
          {restaurants.map((r) => (
            <div className="restaurant-card" key={r._id}>
              <img
                src={r.image || "https://via.placeholder.com/250"}
                alt={r.name}
              />
              <h3>{r.name}</h3>
              <p>{r.description}</p>
              <p>{r.address}</p>
              <Link to={`/menu/${r._id}`} className="menu-btn">
                View Menu
              </Link>
            </div>
          ))}
        </div>
        <button className="arrow right-arrow" onClick={scrollRight}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Restaurants;
