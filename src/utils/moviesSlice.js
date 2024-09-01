import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movie',
    initialState: {
        onPlayingMovies: null,
        movieTrailerVideo: null
    },
    reducers: {
        addOnPlayingMovies : (state,action)=>{
            state.onPlayingMovies=action.payload;
        },
        movieTrailer : (state,action)=>{
            state.movieTrailerVideo=action.payload;
        }
    }
})

export const {addOnPlayingMovies,movieTrailer} = moviesSlice.actions;
export default moviesSlice.reducer;