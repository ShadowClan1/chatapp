import { configureStore } from "@reduxjs/toolkit";
import screenReducer from '../screenSlice/ScreenSlice'
export const store = configureStore({
    reducer : {
        screen : screenReducer
    }
})