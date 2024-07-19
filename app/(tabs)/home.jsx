import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, router } from 'expo-router'
import CustomButtom from '../../components/CustomButtom'
import images from '../../constants/images'
import { Ionicons, MaterialIcons,FontAwesome5  } from '@expo/vector-icons';
const Home = () => {
  return (
    <SafeAreaView className="h-full" style={{backgroundColor:"#38b000"}}>
    <View>
    <Text className="text-2xl text-rose-600 text-center">Welcome Simon</Text></View>
   <ScrollView className=" flex-1">
  <View 
  style={{ borderBottomLeftRadius: 15, borderBottomRightRadius: 15, borderColor: '#000', borderWidth: 1, borderTopWidth: 0 }}
  className="p-4 justify-between border-b flex-row items-center">
  <View>
     <Image
source={images.profile}
className="w-16 h-16 rounded-full"
    />
  </View>
  <Ionicons name="notifications" size={24} color="black" />
   
  </View>
  <View className="bg-stone-100 h-full">
     <View className="border p-4 m-4  rounded-lg">
    <Text className="text-2xl font-rregular">Balance: 
    <Text className="font-rbold">50000</Text></Text>
   </View>
   <View className="flex-row justify-around">
    <TouchableOpacity>
    <View className="items-center">
       <View className="bg-rose-600 rounded-full w-14 h-14 ">
        <Image
          source={images.pay}
         className="w-12 h-12"
        />
      </View>
      <Text className="font-rbold">Pay</Text>
    </View>
     
    </TouchableOpacity>
    <TouchableOpacity>
    <View className="items-center">
       <View className="bg-sky-600 items-center justify-center rounded-full w-14 h-14 ">
       <MaterialIcons name="arrow-outward" size={32} color="white" />
      </View>
      <Text className="font-rbold">Send</Text>
    </View>
     
    </TouchableOpacity>
    <TouchableOpacity>
    <View className="items-center">
       <View className=" rounded-full w-14 h-14 bg-green-500 ">
        <Image
          source={images.withdraw}
         className="w-12 h-12"
        />
      </View>
      <Text className="font-rbold">Withdraw</Text>
    </View>
     
    </TouchableOpacity>
   
    <TouchableOpacity>
    <View className="items-center">
       <View className=" items-center justify-center rounded-full w-14 h-14" style={{backgroundColor:"#540d6e"}}>
       <FontAwesome5 name="file-invoice-dollar" size={24} color="white" />
      </View>
      <Text className="font-rbold">Invoice</Text>
    </View>
     
    </TouchableOpacity>
   </View>
  </View>
  

   </ScrollView>
    
      
    </SafeAreaView>
  )
}

export default Home