import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    jops :[],
    initialized :false,
    isError:false
}

const jopSilece = createSlice({
        name:'jops',
        initialState,
        reducers : {
            setJop: (state,action) => {
                state.jops = action.payload;
                state.initialized=true;
            },
            setError:(state) => {
                state.isError = true;
                state.initialized =true;
            }
        }
})

//aksiyonları export etme
export const  {setJop,setError} = jopSilece.actions; //onject destraction


//createSlice in oluşturduğu reducer i export etme 
export default jopSilece.reducer;
