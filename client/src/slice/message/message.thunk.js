import { createAsyncThunk } from "@reduxjs/toolkit";
// import toast from "react-hot-toast";
import axiosInstance from "../../components/utilities/axiosIntance.js";
import toast from "react-hot-toast";

export const sendMessageThunk = createAsyncThunk(
  "sendMessageThunk",
  async ({ receiverId, message }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(`/message/send/${receiverId}`, {
        message,
      });
      // console.log("response data inside the send message thunk ", response);
      return response.data;
    } catch (error) {
      const errorOutput =
        error.response?.data?.message || error.message || "Login failed";
      toast.error(errorOutput);
      return rejectWithValue(errorOutput);
    }
  }
);
export const getMessageThunk = createAsyncThunk(
  "getMessageThunk",
  async ({ receiverId }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        `/message/get-messages/${receiverId}`
      );
      return response.data;
    } catch (error) {
      const errorOutput = error.response?.data?.message || error.message;
      toast.error(errorOutput);
      return rejectWithValue(errorOutput);
    }
  }
);
