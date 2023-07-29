import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer"; // Import your root reducer here

// Create your Redux store
const store = createStore(rootReducer);

// Wrap your App component with the Provider and provide the store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
export default App;
