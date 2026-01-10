import React, { useState } from "react";
import "./Signup.css";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";



const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSignup = async () => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    navigate("/dashboard");
  } catch (error) {
    alert(error.message);
  }
};


  return (
    <div className="auth-container">
      <h2>Sign Up</h2>

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="primary-btn" onClick={handleSignup}>
        Create Account
      </button>
    </div>
  );
};

export default Signup;
