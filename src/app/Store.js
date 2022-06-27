import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../Features/Counter/couunterSlice'
import randomReducer from '../Features/Random/RandomSlice'

export const store = configureStore({
    reducer : {
        Counter : counterReducer,
        Random : randomReducer
    }
})