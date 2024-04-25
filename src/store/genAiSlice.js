import { createSlice } from "@reduxjs/toolkit";


const genAiSlice=createSlice({
    name:'geminiai',
    initialState:{
        showGeminiSearch:false,
        showSearchBar:"",
        movieNames:null,
        movieResults:null
    },
    reducers:{
        toggleGeminiSearch:(state)=>{
                state.showGeminiSearch=!state.showGeminiSearch
        },
        updateSearchBar:(state,action)=>{
            state.showSearchBar=action.payload
        },
        addGeminiAiMovieResults:(state,action)=>{
            const {movieNames,movieResults}=action.payload
             state.movieNames=movieNames
            state.movieResults=movieResults
        }
    }
})


export const{toggleGeminiSearch,updateSearchBar,addGeminiAiMovieResults}=genAiSlice.actions
export default genAiSlice.reducer;