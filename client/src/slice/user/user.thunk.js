import { createAsyncThunk } from "@reduxjs/toolkit";
// import toast from "react-hot-toast";
import axiosInstance from "../../components/utilities/axiosIntance.js";
import toast from "react-hot-toast";

export const loginUserThunk = createAsyncThunk(
  "loginUserThunk",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/user/login", {
        username,
        password,
      });
      // console.log(username, password);
      // console.log(response);
      // toast.success("user login successfully!");
      return response.data;
    } catch (error) {
      const errorOutput =
        error.response?.data?.message || error.message || "Login failed";
      toast.error(errorOutput);
      return rejectWithValue(errorOutput);
    }
  }
);
export const registerUserThunk = createAsyncThunk(
  "registerUserThunk",
  async ({ fullName, username, password, gender }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/user/register", {
        fullName,
        username,
        password,
        gender,
      });
      // console.log(username, password);
      // console.log(response);
      toast.success("account created successfully!");
      return response.data;
    } catch (error) {
      const errorOutput =
        error.response?.data?.message || error.message || "Login failed";
      toast.error(errorOutput);
      return rejectWithValue(errorOutput);
    }
  }
);
