import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
    name: "Movies",
    initialState: {
        nowPlayingMovies: null,
        VideoTrailer: null,
        popularMovieList: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        MovieTrailerVideo: (state,action)=> { 
            state.VideoTrailer = action.payload
        },
        PopularMovies: (state,action) => {
            state.popularMovieList = action.payload
        }
    }
})

export const { addNowPlayingMovies, MovieTrailerVideo, PopularMovies } = moviesSlice.actions;

export default moviesSlice.reducer;