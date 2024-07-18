import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pdfMem: [],
};

const pdfSlice = createSlice({
  name: "pdf",
  initialState,
  reducers: {
    add: (state, action) => {
      state.pdfMem.push(action.payload);
    },
    clearpdfMem: (state) => {
      state.pdfMem = [];
    },
    removeSpecificPdf: (state, action) => {
      state.pdfMem.splice(action.payload, 1);
    },
  },
});

export const { add, clearpdfMem, removeSpecificPdf } = pdfSlice.actions;

export default pdfSlice.reducer;
