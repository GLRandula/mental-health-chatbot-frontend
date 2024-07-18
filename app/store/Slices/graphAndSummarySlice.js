import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  graphAndSummaryHistory: [],
};

const graphAndSummarySlice = createSlice({
  name: "graph",
  initialState,
  reducers: {
    add: (state, action) => {
      state.graphAndSummaryHistory.push(action.payload);
    },
    clearGraphAndSummaryHistory: (state) => {
      state.graphAndSummaryHistory = [];
    },
    removeSpecificChat: (state, action) => {
      state.graphAndSummaryHistory.splice(action.payload, 1);
    },
  },
});

export const { add, clearGraphAndSummaryHistory, removeSpecificChat } = graphAndSummarySlice.actions;

export default graphAndSummarySlice.reducer;
