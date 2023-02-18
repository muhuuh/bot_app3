import { createSlice } from "@reduxjs/toolkit";

const DUMMY_MESSAGES = [];
const DUMMY_THREAD = [{ user: "me", message: `meeessaaaaage` }];

const defaultState = {
  messages: DUMMY_MESSAGES,
  thread: DUMMY_THREAD,
  totalMessages: 0,
};

const messageSlice = createSlice({
  name: "messages",
  initialState: defaultState,
  reducers: {
    updateThread(state, action) {
      const newMessage = action.payload;
      state.thread = [...state.thread, newMessage];
    },
  },
});

export const messageActions = messageSlice.actions;
export default messageSlice;
