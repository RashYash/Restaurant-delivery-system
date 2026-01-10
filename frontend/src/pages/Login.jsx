import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { auth, googleProvider } from "../firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const navigate = useNavigate();

  const handleLogin = async () => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    navigate("/dashboard");
  } catch (error) {
    alert(error.message);
  }
};

const handleGoogleLogin = async () => {
  try {
    await signInWithPopup(auth, googleProvider);
    navigate("/dashboard");
  } catch (error) {
    alert(error.message);
  }
};


  return (
    <div className="auth-container">
      <h2>Login</h2>

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

      <button className="primary-btn" onClick={handleLogin}>
        Login
      </button>

      <button className="google-btn" onClick={handleGoogleLogin}>
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
