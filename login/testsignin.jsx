import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signin.css";

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSignIn = () => {
    fetch("http://localhost:5000/api/signin", {
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
          throw new Error("Authentication failed");
        }
      })
      .then((data) => {
        alert("Logged in successfully");
        navigate("../menu/menupage");
        setErrorMessage("");
      })
      .catch((error) => {
        console.error("Error signing in:", error);
        setErrorMessage("Incorrect username or password");
      });
  };

  return (
    <div className="parent-signin">
      <div className="signin-container">
        <div className="signin-content">
          <div className="signin-image">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThQCEoWIxooYAyzPXOlmNQCdX8aGwn1Qd1fgrhrcg8qTL12uNv6kEVIzwmehdJlrZ1vt8&usqp=CAU"
              alt="signin image"
            />
          </div>
          <div className="signin-form">
            <h2>Sign In</h2>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <input
              className="signin-input"
              type="text"
              placeholder="Email id"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="signin-input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="signin-button" onClick={handleSignIn}>
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
