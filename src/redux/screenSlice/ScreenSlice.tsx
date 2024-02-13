import { createSlice } from "@reduxjs/toolkit";
import { MessagesIF } from "../../interfaces/messagesIF";
interface initialStateIF {
type : string  
messages? : MessagesIF 
}
const initialState : initialStateIF ={ type : 'DEFAULT',}
const screenSlice = createSlice({
    name : 'screenReducer',
    initialState,
    reducers : {
        setScreen :()=>{

        }
    }
})

export const {} = screenSlice.actions;
export default screenSlice.reducer