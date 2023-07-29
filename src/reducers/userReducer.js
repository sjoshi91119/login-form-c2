const initialState = null;

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_USER_DATA":
      return action.payload;
    case "SAVE_USER_DETAILS":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default userReducer;
