import {configureStore} from '@reduxjs/toolkit'
import userReducer from './userSlice'
import movieReducer from './movieSlice'

const appStore=configureStore({
    reducer:{
        // takes the reducers of slices
        user:userReducer,
        movies:movieReducer
        
    }
})

export default appStore;