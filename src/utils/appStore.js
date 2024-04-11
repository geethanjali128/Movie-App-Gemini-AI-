import {configureStore} from '@reduxjs/toolkit'
import userReducer from './userSlice'

const appStore=configureStore({
    reducer:{
        // takes the reducers of slices
        user:userReducer,
        
    }
})

export default appStore;