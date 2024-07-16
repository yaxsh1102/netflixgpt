import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import moviesReducer from './movieSlice'
import gptReducer from './gptSlice' ;
import langReducer from './langSlice'

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        gpt:gptReducer ,
        language :langReducer
    }
})

export default appStore;