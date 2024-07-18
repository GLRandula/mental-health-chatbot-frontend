import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedUser: [],
  fileList: [],
  trainedFile: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.loggedUser.push(action.payload);
    },
    removeUser: (state) => {
      state.loggedUser = [];
    },
    updateUser: (state, action) => {
      const user = state.loggedUser.find(
        (user) => user.id === action.payload.id
      );
      if (user) {
        user.vectorstore = action.payload.vectorstore;
      }
    },
    addFileHistory: (state, action) => {
      state.fileList.push(action.payload);
    },

    clearUserFileList: (state) => {
      state.fileList = [];
    },

    clearTrainedFileList: (state) => {
      state.trainedFile = [];
    },

    updateTrained: (state, action) => {
      state.trainedFile = [];
      state.trainedFile.push(action.payload);
    },
  },
});

export const { addUser, removeUser, updateUser, addFileHistory, clearUserFileList, updateTrained, clearTrainedFileList } = userSlice.actions;

export default userSlice.reducer;