import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';
import NotificationCard from '../../components/NotificationCard';
const Inbox = () => {
  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: "#0d1b2a" }}>
   <View className="p-3 flex-row items-center">
   <TouchableOpacity>
      <AntDesign name="arrowleft" size={24} color="white" />
   </TouchableOpacity>
  
      <Text className="text-2xl text-center font-rbold mx-3 text-stone-300">Notifications</Text>
    </View>
    <ScrollView>
      <NotificationCard
        message="You have a new friend request from John Doe."
        sender="John Doe"
        date="12-01-2022"
      />
        <NotificationCard
        message="You have a new friend request from John Doe."
        sender="John Doe"
        date="12-01-2022"
      />
        <NotificationCard
        message="You have a new friend request from John Doe."
        sender="John Doe"
        date="12-01-2022"
      />
        <NotificationCard
        message="You have a new friend request from John Doe."
        sender="John Doe"
        date="12-01-2022"
      />
        <NotificationCard
        message="You have a new friend request from John Doe."
        sender="John Doe"
        date="12-01-2022"
      />
        <NotificationCard
        message="You have a new friend request from John Doe."
        sender="John Doe"
        date="12-01-2022"
      />
        <NotificationCard
        message="You have a new friend request from John Doe."
        sender="John Doe"
        date="12-01-2022"
      />
    </ScrollView>
    </SafeAreaView>
  )
}

export default Inbox