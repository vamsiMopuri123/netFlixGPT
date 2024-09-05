import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        gptSearch : false,
        movieResults: null,
        movieName: null
    },
    reducers: {
        toggleGptSearch: (state,action)=>{
            state.gptSearch = !state.gptSearch;
        },
        addGptMovieResults: (state,action)=>{
            state.movieResults=action.payload;
        },
        addGptMovieNames: (state,action) =>{
            state.movieName=action.payload;
        }
    }
})

export const {toggleGptSearch,addGptMovieResults,addGptMovieNames} = gptSlice.actions;
export default gptSlice.reducer;