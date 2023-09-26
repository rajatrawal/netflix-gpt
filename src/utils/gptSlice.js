import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        GPTSearchView: false
    },
    reducers: {
        changeGPTSearchView: (state, action) => {
            state.GPTSearchView = !state.GPTSearchView;
        }
    }
})

export default gptSlice.reducer;
export const { changeGPTSearchView } = gptSlice.actions;