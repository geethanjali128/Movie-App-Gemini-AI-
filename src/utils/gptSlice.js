import { createSlice } from "@reduxjs/toolkit";


const gptSlice=createSlice({
    name:'gpt',
    initialState:{
        showGptSearch:false,
        showSearchBar:""
    },
    reducers:{
        toggleGptSearch:(state)=>{
                state.showGptSearch=!state.showGptSearch
        },
        updateSearchBar:(state,action)=>{
            state.showSearchBar=action.payload
        }
    }
})


export const{toggleGptSearch,updateSearchBar}=gptSlice.actions
export default gptSlice.reducer;