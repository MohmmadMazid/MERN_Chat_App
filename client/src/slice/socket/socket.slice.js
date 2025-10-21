import { createSlice } from "@reduxjs/toolkit";

import io from "socket.io-client";
const initialState = {
  socket: null,
  onlineUsers: null,
};

const socketSlice = createSlice({
  name: "socket",
  initialState,
  reducers: {
    initializeSocket: (state, action) => {
      const socket = io(import.meta.env.VITE_DB_ORIGIN, {
        query: {
          userId: action.payload,
        },
      });
      state.socket = socket;
    },
    setOnlineUsers: (state, action) => {
      // socket.on("onlineUsers", (onlineUsers) => {
      //   console.log(onlineUsers);
      // });
      state.onlineUsers = action.payload;
    },
  },
});
export const { initializeSocket, setOnlineUsers } = socketSlice.actions;
export default socketSlice.reducer;
