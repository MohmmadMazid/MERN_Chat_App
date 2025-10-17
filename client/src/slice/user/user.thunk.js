import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginUserThunk = createAsyncThunk("loginUserThunk", async () => {
  console.log("async thunk is working");
});
