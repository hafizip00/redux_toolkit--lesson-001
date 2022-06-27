import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count : 0,
}

const counterSlice = createSlice({
    name : 'counter',
    initialState,
    reducers : {
        increament : (state) => {
            state.count += 1;
        },
        decrement : (state) =>{
            state.count -= 1
        }
    }
})

export const {increament , decrement} = counterSlice.actions;
export default counterSlice.reducer