import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "./LocationPicker.css";
import axios from "axios";
import { auth } from "../firebase"; // Make sure Firebase is imported

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 6.9271, // Colombo
  lng: 79.8612,
};

const LocationPicker = () => {
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState("");

  // Save location to backend
  const saveLocation = async () => {
    if (!location) {
      alert("Please select a location first!");
      return;
    }

    try {
      // Get Firebase token of logged-in user
      const token = await auth.currentUser.getIdToken(true);

      // Send location to backend with token in headers
      await axios.post(
        "http://localhost:5000/api/location/save",
        {
          address,
          latitude: location.lat,
          longitude: location.lng,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Location saved successfully");
    } catch (error) {
      console.error(error.response || error);
      alert("Failed to save location. Make sure you are logged in.");
    }
  };

  // Handle map click to get lat/lng & fetch address
  const handleMapClick = async (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();

    setLocation({ lat, lng });

    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=YOUR_GOOGLE_MAPS_API_KEY`
      );
      const data = await response.json();

      if (data.results && data.results.length > 0) {
        setAddress(data.results[0].formatted_address);
      }
    } catch (err) {
      console.error("Error fetching address:", err);
    }
  };

  return (
    <div className="location-page">
      <h2>Select Delivery Location</h2>

      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={13}
          onClick={handleMapClick}
        >
          {location && <Marker position={location} />}
        </GoogleMap>
      </LoadScript>

      {location && (
        <>
          <div className="location-info">
            <p><b>Address:</b> {address}</p>
            <p><b>Latitude:</b> {location.lat}</p>
            <p><b>Longitude:</b> {location.lng}</p>
          </div>
          <button className="save-btn" onClick={saveLocation}>
            Save Delivery Location
          </button>
        </>
      )}
    </div>
  );
};

export default LocationPicker;
