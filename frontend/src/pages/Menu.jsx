import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Menu.css";

const Menu = () => {
  const { restaurantId } = useParams();
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/menu/${restaurantId}`
        );
        setMenuItems(res.data);
      } catch (err) {
        console.error("Error fetching menu items:", err);
        setError("Failed to load menu. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, [restaurantId]);

  if (loading) return <p>Loading menu...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="menu-page">
      <h2>Menu</h2>
      {menuItems.length === 0 && <p>No menu items found for this restaurant.</p>}
      <div className="menu-list">
        {menuItems.map((item) => (
          <div className="menu-card" key={item._id}>
            <img
              src={item.image || "https://via.placeholder.com/150"}
              alt={item.name}
            />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>
              <b>Price:</b> ${item.price.toFixed(2)}
            </p>
            <button className="add-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
