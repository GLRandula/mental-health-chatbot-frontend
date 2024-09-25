import { createSlice } from "@reduxjs/toolkit";
import { get } from "react-scroll/modules/mixins/scroller";

const initialState = {
  loggedUser: [],
  fileList: [],
  trainedFile: [],
  userFilled: false,
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
    setUserFilled: (state, action) => {
      state.setUserFilled = action.payload;
    },
    getUserFilled: (state) => {
      return state.userFilled;
    },
  },
});

export const { addUser, removeUser, updateUser, addFileHistory, clearUserFileList, updateTrained, clearTrainedFileList, setUserFilled, getUserFilled } = userSlice.actions;

export default userSlice.reducer;