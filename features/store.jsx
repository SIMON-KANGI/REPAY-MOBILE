import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from './auth/authSlice'
import { apiSlice } from "./auth/authApi";

export const store= configureStore({
    reducer:{
        auth:AuthReducer,
        api:apiSlice.reducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(apiSlice.middleware)
})