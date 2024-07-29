import { createSlice } from "@reduxjs/toolkit";

const authSlice= createSlice({
    name:'auth',
    initialState:{
        isLoggedIn:false,
        user:null,
        username:"",
        token:''
    },
    reducers:{
        setCredentials:(state,action)=>{
            const {username, user, token, isLoggedIn}= action.payload
            state.username=username,
            state.user=user,
            state.token=token,
            state.isLoggedIn=true

        },
        logout:(state)=>{
            state.isLoggedIn=false,
            state.user=null,
            state.username="",
            state.token=""
        }
    }
})

export const {setCredentials, logout}= authSlice.actions
export default authSlice.reducer

export const selectUsername= (state)=>state.auth.username
export const selectCurrentUser= (state)=>state.auth.user
export const selectToken= (state)=>state.auth.token