// chatSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chatHistory: [],           // List of chats (e.g., { chat_id, topic })
  selectedChat: null,        // Currently selected chat (e.g., { chat_id, topic })
  selectedChatHistory: [],   // Messages of the selected chat
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    // Set the entire chat history
    setChatHistory: (state, action) => {
      state.chatHistory = action.payload;
    },
    // Select a chat and reset the selected chat history
    selectChat: (state, action) => {
      state.selectedChat = action.payload;
      state.selectedChatHistory = [];
    },
    // Set messages for the selected chat
    setSelectedChatHistory: (state, action) => {
      state.selectedChatHistory = [];
      state.selectedChatHistory = action.payload;
    },
    // Add a new message to the selected chat's history
    addMessageToSelectedChat: (state, action) => {
      state.selectedChatHistory.push(action.payload);
    },
  },
});

export const {
  setChatHistory,
  selectChat,
  setSelectedChatHistory,
  addMessageToSelectedChat,
} = chatSlice.actions;

export default chatSlice.reducer;
