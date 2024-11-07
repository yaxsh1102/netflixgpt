import {createSlice} from '@reduxjs/toolkit'
const gptSLice = createSlice({
    name:'gpt' ,
    initialState:{
        showGptSearch:false ,
        recommendedMovies : [],
        movieNames:null 
    } ,
    reducers:{
        toggleGptSearchView:(state , action)=>{
            state.showGptSearch=!state.showGptSearch 

        } ,

        setRecommendedMovies:(state  , action)=>{
            const {movies , movieNames} = action.payload
            state.recommendedMovies = movies;
            state.movieNames = movieNames;

        }
    }
})

export const{toggleGptSearchView ,setRecommendedMovies} = gptSLice.actions

export default gptSLice.reducer