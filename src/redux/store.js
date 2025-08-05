import { configureStore } from "@reduxjs/toolkit";
//slice sono le singole parti di uno stato (tipo: counterReducer)
import {counterReducer} from './slices/counterSlice'
import {citiesReducer} from './slices/citiesSlice'

// magazzino degli stati 
export default configureStore({
    reducer: {
        counter: counterReducer,
        cities: citiesReducer
    },
})