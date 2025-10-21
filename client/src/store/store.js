import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/user/user.slice";
// import messageReducer from "../slice/message/message.slice";
import messageSlice from "../slice/message/message.slice";
import socketSlice from "../slice/socket/socket.slice";
export const store = configureStore({
  reducer: {
    userSlice: userReducer,
    messageSlice,
    socketSlice,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredPaths: ["socketSlice.socket"],
      },
    });
  },
});
