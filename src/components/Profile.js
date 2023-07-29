import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; // Update import to useNavigate
import { saveUserData, saveUserDetails } from "../actions/userActions"; // Import the action creators correctly

const Profile = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleLogout = () => {
    // Dispatch the logout action to clear user data from Redux state
    dispatch(saveUserData(null)); // Clear user data
    dispatch(saveUserDetails(null)); // Clear user details
    navigate("/login"); // Use navigate instead of history.push
  };

  useEffect(() => {
    // Fetch additional user details using the saved ID from Redux state
    if (user && user.id) {
      fetch(`https://dummyjson.com/users/${user.id}`)
        .then((res) => res.json())
        .then((data) => {
          // Save the user object with all the details to Redux state
          dispatch(saveUserDetails(data)); // Use the correct action creator
        })
        .catch((error) => {
          console.error("Error fetching user details:", error);
        });
    }
  }, [dispatch, user]);

  return (
    <div className="profile-box">
      <h1>User Profile</h1>
      <p className="typewriter-text">
        <strong>User email:</strong> {user.email}
      </p>
      <p className="typewriter-text">
        <strong>Password:</strong> {user.password}
      </p>

      <button onClick={handleLogout}>LOGOUT</button>
    </div>
  );
};

export default Profile;
