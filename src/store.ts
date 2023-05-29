import { configureStore } from "@reduxjs/toolkit"
import rootReducer from './Modules'


export const store = configureStore({
    reducer: rootReducer
})