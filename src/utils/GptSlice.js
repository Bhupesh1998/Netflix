import { createSlice } from "@reduxjs/toolkit";

const GtpSlice = 
    createSlice({
        name: 'GptSearch',
        initialState: {
            toggelmyGpt : false
        },
        reducers:{
            toggleGpt: (state) => {
                state.toggelmyGpt = !state.toggelmyGpt
            }
        }
    })


export const { toggleGpt } = GtpSlice.actions;

export default GtpSlice.reducer;