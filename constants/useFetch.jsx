import { View, Text } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
const UseFetch = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchData= async()=>{
        try{
            setLoading(true)
            const response = await axios.get(url)
            setData(response.data)

        }catch(err){
            setError(err.message)
            setLoading(false)
        }finally{
            setLoading(false)
        }
    }
    useEffect(()=>{
        fetchData()
    },[url])

    const refetch=()=>{
        fetchData()
    }
  return {data, loading, error, refetch}
}

export default UseFetch