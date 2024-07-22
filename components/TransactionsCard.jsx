import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const TransactionsCard = ({amount, receiver, title, date}) => {
  return (
    <TouchableOpacity>
     <View className="shadow-md border rounded-md p-3 my-2 border-stone-300">
        <Text>{title}</Text>
        <Text>Amount: <Text className="font-rbold">{amount}</Text></Text>
        <Text>Receiver: <Text className="font-rbold">{receiver}</Text> </Text>
        <Text>Date: <Text className="font-rbold"> {date}</Text></Text>
        <Text>Status: Success</Text>
 
     </View>
    </TouchableOpacity>
  )
}

export default TransactionsCard