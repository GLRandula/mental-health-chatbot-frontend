// chatSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chatHistory: [],           // List of chats (e.g., { chat_id, topic })
  selectedChat: null,        // Currently selected chat (e.g., { chat_id, topic })
  selectedChatHistory: [],
  doctorList: [],   // Messages of the selected chat
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
    setDoctorList: (state, action) => {
      state.doctorList = action.payload;
    },
    cleanChatVariables: (state) => {
      state.chatHistory = [];
      state.selectedChat = null;
      state.selectedChatHistory = [];
      state.doctorList = [];
    },
  },
});

export const {
  setChatHistory,
  selectChat,
  setSelectedChatHistory,
  addMessageToSelectedChat,
  setDoctorList,
  cleanChatVariables
} = chatSlice.actions;

export default chatSlice.reducer;
