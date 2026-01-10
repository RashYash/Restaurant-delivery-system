import React from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";

<Link to="/location" className="location-btn">
  Select Delivery Location
</Link>

const Dashboard = ({ user }) => {
  return (
    <div className="dashboard">
      <h1>Welcome to FoodGo 🍔</h1>
      <p>You are logged in as:</p>
      <h3>{user?.email}</h3>
    </div>
    
  );
};

export default Dashboard;
