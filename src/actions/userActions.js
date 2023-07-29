export const saveUserData = (userData) => {
  return {
    type: "SAVE_USER_DATA",
    payload: userData,
  };
};

export const saveUserDetails = (userDetails) => {
  return {
    type: "SAVE_USER_DETAILS",
    payload: userDetails,
  };
};
