import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const NotificationCard = ({message, sender, date}) => {
  return (
    <TouchableOpacity className="bg-stone-300 p-2 rounded-md m-2">
      <Text className="font-rbold text-xl">{sender}</Text>
      <Text className="text-green-700 text-lg">{message}</Text>
    </TouchableOpacity>
  )
}

export default NotificationCard