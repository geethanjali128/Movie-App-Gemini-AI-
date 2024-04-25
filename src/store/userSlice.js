import {createSlice} from '@reduxjs/toolkit'

const userSlice=createSlice({
    name:"user",
    initialState:null,
    reducers:{
        addUser:(state,action)=>{
            // updating state with action.payload(mutating the state)
            return action.payload
        },
         removeUser:(state)=>{
            // updating state with null(mutating the state)
            return null
        }

    }
})

export const {addUser,removeUser}=userSlice.actions
export default userSlice.reducer;