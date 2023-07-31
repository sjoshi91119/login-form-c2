import React, { useEffect } from "react";

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

export default Profile;
