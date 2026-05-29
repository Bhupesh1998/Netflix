import {configureStore} from '@reduxjs/toolkit'
import userReducer from './userSlice'
import moviesReducr from './moviesSlice'
import gptReducer from './GptSlice'

const appStore = configureStore({
    reducer:{
        user: userReducer,
        movies: moviesReducr,
        gpt: gptReducer
    }
})

export default appStore;