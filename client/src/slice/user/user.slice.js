import { createSlice } from "@reduxjs/toolkit";
import {
  getUserProfileThunk,
  loginUserThunk,
  logoutUserThunk,
  registerUserThunk,
} from "./user.thunk";

const initialState = {
  isAuthenticated: false,
  screenLoading: true,
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
      state.isAuthenticated = true;
      state.buttonLoading = false;
    });
    builder.addCase(loginUserThunk.rejected, (state, action) => {
      // console.log("rejected");
      // state.buttonLoading = false;
    });

    // for register
    builder.addCase(registerUserThunk.pending, (state, action) => {
      // console.log("pending");
      state.buttonLoading = true;
    });
    builder.addCase(registerUserThunk.fulfilled, (state, action) => {
      // console.log("fulfilled");
      console.log("action payload ", action.payload);
      state.userProfile = action.payload?.user;
      state.buttonLoading = false;
      state.isAuthenticated = true;
    });
    builder.addCase(registerUserThunk.rejected, (state, action) => {
      console.log("rejected");
      state.buttonLoading = false;
    });
    // for  logout
    builder.addCase(logoutUserThunk.pending, (state, action) => {
      // console.log("pending");
      state.buttonLoading = true;
    });
    builder.addCase(logoutUserThunk.fulfilled, (state, action) => {
      // console.log("fulfilled");
      console.log("action payload ", action.payload);
      state.userProfile = null;
      state.buttonLoading = false;
      state.isAuthenticated = false;
    });
    builder.addCase(logoutUserThunk.rejected, (state, action) => {
      console.log("rejected");
      state.buttonLoading = false;
    });
    // for getUserprofile
    builder.addCase(getUserProfileThunk.pending, (state, action) => {
      // console.log("pending");
      state.screenLoading = true;
    });
    builder.addCase(getUserProfileThunk.fulfilled, (state, action) => {
      console.log("action payload ", action.payload);
      state.screenLoading = false;
      state.isAuthenticated = true;
    });
    builder.addCase(getUserProfileThunk.rejected, (state, action) => {
      state.screenLoading = false;
    });
  },
});
export const { login } = userSlice.actions;
export default userSlice.reducer;
