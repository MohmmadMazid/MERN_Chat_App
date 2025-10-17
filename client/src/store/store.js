import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/user/user.slice";
export const store = configureStore({
  reducer: {
    userSlice: userReducer,
  },
});
