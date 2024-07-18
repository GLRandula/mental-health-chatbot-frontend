import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  qHistory: []
};


const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    addQuestion: (state, action) => {
      state.qHistory.push(action.payload);
    },
    clearQPaper: (state) => {
      state.qHistory = [];
    },
  },
});

export const { addQuestion, clearQPaper } = questionSlice.actions;

export default questionSlice.reducer;
