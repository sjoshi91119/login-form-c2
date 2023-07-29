import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; // Updated import statement

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Updated hook name

  const submitDetails = () => {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: userEmail,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data && data.status === "success") {
          // Save the entire user object (including token and id) to Redux state
          dispatch({
            type: "SAVE_USER_DATA",
            payload: data.user,
          });

          // Redirect the user to the profile page
          navigate("/profile"); // Updated navigate usage
        } else {
          console.error(data.error); // Handle login error
        }
      })
      .catch((error) => {
        console.error("Error occurred:", error);
      });
  };

  return (
    <>
      <div className="login-form">
        <h3>Welcome back! 👋</h3>
        <h1>Sign in to your account</h1>

        <label htmlFor="emailInput">Your email</label>
        <input
          type="email"
          id="emailInput"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />

        <label htmlFor="passwordInput">Password</label>
        <input
          type="password"
          id="passwordInput"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" onClick={submitDetails}>
          CONTINUE
        </button>

        <a href="#">Forget your password?</a>
      </div>
      <div className="register">
        <p id="signup-redirect">
          Don't have an account? <a href="#">Sign up</a>
        </p>
      </div>
    </>
  );
};

export default Login;
