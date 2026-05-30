import { createSlice } from "@reduxjs/toolkit";

const AppConfigSlice = createSlice(
    {
    name:'AppConfigs',
    initialState:{
        slelectedLanguage : "en"
    },
    reducers:{
        SelectedLanguage: (state, action) =>{
            state.slelectedLanguage = action.payload;
        }
    }
}
)

export const { SelectedLanguage } = AppConfigSlice.actions;

export default AppConfigSlice.reducer;

