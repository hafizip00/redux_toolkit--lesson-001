import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    number : 0
}

const randomSlice = createSlice({
    name : 'random',
    initialState,
    reducers : {
        generate : (state) =>{
            state.number = Math.floor(Math.random() * 20)
        },
        generate100 : (state) =>{
            state.number = Math.floor(Math.random() * 100)
        }
    }
});

export const {generate , generate100} = randomSlice.actions;
export default randomSlice.reducer;