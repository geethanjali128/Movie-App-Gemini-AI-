import {configureStore} from '@reduxjs/toolkit'
import userReducer from './userSlice'
import movieReducer from './movieSlice'
import geminiaiReducer from './genAiSlice'
import configReducer from './configSlice'

const appStore=configureStore({
    reducer:{
        // takes the reducers of slices
        user:userReducer,
        movies:movieReducer,
        geminiai:geminiaiReducer,
        config:configReducer
        
    }
})

export default appStore;