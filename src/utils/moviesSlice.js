import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movie',
    initialState: {
        onPlayingMovies: null,
        movieTrailerVideo: null,
        onPopularMovies: null,
        onTopRatedMovies: null,
        onUpcomingMovies: null,
    },
    reducers: {
        addOnPlayingMovies : (state,action)=>{
            state.onPlayingMovies=action.payload;
        },
        movieTrailer : (state,action)=>{
            state.movieTrailerVideo=action.payload;
        },
        popularMovies : (state,action)=>{
            state.onPopularMovies=action.payload;
        }, 
        topRatedMovies : (state,action)=>{
            state.onTopRatedMovies=action.payload;
        }, 
        upcomingMovies : (state,action)=>{
            state.onUpcomingMovies=action.payload;
        }, 
    }
})

export const {addOnPlayingMovies,movieTrailer,popularMovies,topRatedMovies,upcomingMovies} = moviesSlice.actions;
export default moviesSlice.reducer;