import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'

const Dashboard = () => {
  return (
    <SafeAreaView>
      <Text>Dashboard</Text>
      <Link className="text-xl text-blue-500" href="/home">Home</Link>
    </SafeAreaView>
  )
}

export default Dashboard