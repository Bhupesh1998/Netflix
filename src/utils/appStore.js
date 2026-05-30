import {configureStore} from '@reduxjs/toolkit'
import userReducer from './userSlice'
import moviesReducr from './moviesSlice'
import gptReducer from './GptSlice'
import appConfiguarations from './AppConfigSlice'

const appStore = configureStore({
    reducer:{
        user: userReducer,
        movies: moviesReducr,
        gpt: gptReducer,
        appLanguageCon: appConfiguarations
    }
})

export default appStore;