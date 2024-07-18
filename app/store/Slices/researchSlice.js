import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    research: [],
}

const researchSlice = createSlice({
    name: "research",
    initialState,
    reducers: {
        addResearch: (state, action) => {
            state.research.push(action.payload);
        },
        removeResearch: (state) => {
            state.research = [];
        },
    },
});

export const { addResearch, removeResearch } = researchSlice.actions;

export default researchSlice.reducer;