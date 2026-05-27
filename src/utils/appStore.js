import {configureStore} from '@reduxjs/toolkit'
import userReducer from './userSlice'
import moviesReducr from './moviesSlice'

const appStore = configureStore({
    reducer:{
        user: userReducer,
        movies: moviesReducr 
    }
})

export default appStore;