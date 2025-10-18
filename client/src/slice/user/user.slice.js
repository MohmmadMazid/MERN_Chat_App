import { createSlice } from "@reduxjs/toolkit";
import { loginUserThunk, registerUserThunk } from "./user.thunk";

const initialState = {
  isAuthenticated: false,
  screenLoading: false,
  userProfile: null,
  buttonLoading: false,
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
    //Login User
    builder.addCase(loginUserThunk.pending, (state, action) => {
      // console.log("pending");
      state.buttonLoading = true;
    });
    builder.addCase(loginUserThunk.fulfilled, (state, action) => {
      // console.log("fulfilled");
      // console.log("action payload ", action.payload);
      state.userProfile = action.payload?.user;
      // state.buttonLoading = false;
    });
    builder.addCase(loginUserThunk.rejected, (state, action) => {
      // console.log("rejected");
      // state.buttonLoading = false;
    });
    builder.addCase(registerUserThunk.pending, (state, action) => {
      // console.log("pending");
      state.buttonLoading = true;
    });
    builder.addCase(registerUserThunk.fulfilled, (state, action) => {
      // console.log("fulfilled");
      console.log("action payload ", action.payload);
      // state.userProfile = action.payload?.user;
      // state.buttonLoading = false;
    });
    builder.addCase(registerUserThunk.rejected, (state, action) => {
      console.log("rejected");
      // state.buttonLoading = false;
    });
  },
});
export const { login } = userSlice.actions;
export default userSlice.reducer;
