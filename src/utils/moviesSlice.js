import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
    name: "Movies",
    initialState: {
        nowPlayingMovies: null,
        VideoTrailer: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        MovieTrailerVideo: (state,action)=> { 
            state.VideoTrailer = action.payload
        }
    }
})

export const { addNowPlayingMovies, MovieTrailerVideo } = moviesSlice.actions;

export default moviesSlice.reducer;