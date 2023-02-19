import { createSlice } from "@reduxjs/toolkit";

const DUMMY_CONVERSATIONS = [];
const DUMMY_THREAD = [{ user: "gpt", message: `How can I help you today?` }];

const defaultState = {
  conversations: DUMMY_CONVERSATIONS,
  thread: DUMMY_THREAD,
};

const messageSlice = createSlice({
  name: "messages",
  initialState: defaultState,
  reducers: {
    updateThread(state, action) {
      const newMessage = action.payload;
      state.thread = [...state.thread, newMessage];
    },
    saveConversation(state, action) {
      const newConversation = action.payload;
      console.log("newConversation");
      console.log(newConversation);
      state.conversations = [...state.conversations, state.thread];
      state.thread = DUMMY_THREAD;
    },
  },
});

export const messageActions = messageSlice.actions;
export default messageSlice;
