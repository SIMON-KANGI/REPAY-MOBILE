import { View, Text } from 'react-native'
import React from 'react'
import { selectCurrentUser } from '../features/auth/authSlice'
import { useSelector } from 'react-redux'
const UseAuth = (allowedRoles) => {
    const user= useSelector(selectCurrentUser)
    if(!user) return false
    const {role}= user
    return allowedRoles.includes(role)
}


export default UseAuth