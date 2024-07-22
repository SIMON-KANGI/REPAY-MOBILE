import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '../../constants/images'
const Profile = () => {
  return (
    <SafeAreaView>
      <Text className="text-center text-2xl font-rbold">My Profile</Text>
      <View className="items-center relative">
            <Image
              source={images.profile}
              className="w-32 h-32 rounded-full"
            />
            <Text className="absolute top-20 right-32">Edit</Text>
            </View>
            <View className="p-4 flex-row justify-around">
            <View className="items-center border-r p-4">
               <Text className="text-xl font-rbold ">Full Name</Text>
            <Text className="text-lg">Simon Mwangi</Text>
            </View>
            <View className="items-center p-4">
               <Text className="text-xl font-rbold ">Email Address</Text>
            <Text className="text-lg">sonkusons@gmail.com</Text>
            </View>
             
            </View>
            <View className="p-4 flex-row justify-around">
            <View className="items-center border-r p-4">
               <Text className="text-xl font-rbold ">Location</Text>
            <Text className="text-lg">Nairobi</Text>
            </View>
            <View className="items-center p-4">
               <Text className="text-xl font-rbold "> Contact</Text>
            <Text className="text-lg">0797222488</Text>
            </View>
             
            </View>
            <View className="p-4 flex-row justify-around">
            <View className="items-center border-r p-4">
               <Text className="text-xl font-rbold "> Password</Text>
            <Text className="text-lg">********</Text>
            </View>
            <View className="items-center p-4">
               <Text className="text-xl font-rbold ">Account Type</Text>
            <Text className="text-lg">Personal</Text>
            </View>
           
             
            </View>

    </SafeAreaView>
  )
}

export default Profile