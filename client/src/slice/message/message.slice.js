import { createSlice } from "@reduxjs/toolkit";
import { getMessageThunk, sendMessageThunk } from "./message.thunk";

const initialState = {
  buttonLoading: false,
  messages: null,
  screenLoading: false,
};

const messageSclice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setNewMessages: (state, action) => {
      const oldMessages = state.messages ?? [];
      state.messages = [...oldMessages, action.payload];
    },
  },
  extraReducers: (builder) => {
    //send message
    builder.addCase(sendMessageThunk.pending, (state, action) => {
      // console.log("pending");
      state.buttonLoading = true;
    });
    builder.addCase(sendMessageThunk.fulfilled, (state, action) => {
      // console.log("fulfilled");
      // console.log("action payload in send message ", action?.payload?.message);
      state.messages = [...state.messages, action?.payload?.message];
      state.buttonLoading = false;
    });
    builder.addCase(sendMessageThunk.rejected, (state, action) => {
      // console.log("rejected");
      state.buttonLoading = false;
    });
    //get message
    builder.addCase(getMessageThunk.pending, (state, action) => {
      // console.log("pending");
      state.screenLoading = true;
      state.buttonLoading = true;
    });
    builder.addCase(getMessageThunk.fulfilled, (state, action) => {
      // console.log("fulfilled");
      //   console.log(
      //     "action payload in get message ",
      //     action.payload.responseData.messages
      //   );
      state.messages = action.payload?.responseData?.messages;
      state.screenLoading = false;
      state.buttonLoading = false;
    });
    builder.addCase(getMessageThunk.rejected, (state, action) => {
      // console.log("rejected");
      state.screenLoading = false;
      state.buttonLoading = false;
    });
  },
});
export const { setNewMessages } = messageSclice.actions;
export default messageSclice.reducer;
