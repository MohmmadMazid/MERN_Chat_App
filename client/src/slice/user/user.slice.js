import { createSlice } from "@reduxjs/toolkit";
import { loginUserThunk } from "./user.thunk";

const initialState = {
  isAuthenticated: false,
  screenLoading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: () => {
      console.log("hello login");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUserThunk.pending, (state, action) => {
      console.log("pending");
    });
    builder.addCase(loginUserThunk.fulfilled, (state, action) => {
      console.log("fulfilled");
    });
    builder.addCase(loginUserThunk.rejected, (state, action) => {
      console.log("rejected");
    });
  },
});
export const { login } = userSlice.actions;
export default userSlice.reducer;
