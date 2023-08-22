import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";
import SignIn from "./testsignin";
function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSignUp = () => {
    fetch("http://localhost:5000/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("User registration failed");
        }
      })
      .then((data) => {
        alert("User account created successfully"); // Display success message
        navigate("./testsignin"); // Navigate to SignIn
      })
      .catch((error) => {
        console.error("Error signing up:", error); // Handle error
        setErrorMessage("Registration failed. Please try again.");
      });
  };

  return (
    <div className="parent-signup">
      <div className="signup-container">
        <div className="signup-content">
          <div className="signup-image">
            <img
              src="https://img.freepik.com/free-vector/seasonal-sale-discounts-presents-purchase-visiting-boutiques-luxury-shopping-price-reduction-promotional-coupons-special-holiday-offers-vector-isolated-concept-metaphor-illustration_335657-2766.jpg?w=360"
              alt="sign-up"
            />
          </div>
          <div className="signup-form">
            <h2>Sign Up</h2>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <input
              className="signup-input"
              type="text"
              placeholder="Email id"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="signup-input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="signup-button" onClick={handleSignUp}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
