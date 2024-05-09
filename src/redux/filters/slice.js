import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    name: "",
    number: "",
};

const filteredSlice = createSlice({
    name: "filters",
    initialState: INITIAL_STATE,
    reducers: {
        changeFilter(state, action) {
            state.name = action.payload;
        },
    },
});

export const {changeFilter} = filteredSlice.actions;
export default filteredSlice.reducer;