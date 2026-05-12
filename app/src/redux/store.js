import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counterSlice";

const loggerMiddleware = (store) => (next) => (action) => {
  console.log("Dispatching:", action);

  const result = next(action);

  console.log("New State:", store.getState());

  return result;
};

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),

  devTools: true,
});

export default store;