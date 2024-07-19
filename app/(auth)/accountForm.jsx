import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../components/FormField'
import { Picker } from '@react-native-picker/picker'
import CustomButtom from '../../components/CustomButtom'
import { router } from 'expo-router'
import { AntDesign } from '@expo/vector-icons';
const AccountForm = () => {
  return (
    <SafeAreaView className=" bg-rose-600  h-full">
    <View className="p-3 flex-row items-center">
    <AntDesign name="arrowleft" size={24} color="black" />
      <Text className="text-2xl text-center font-rbold mx-3 text-slate-100">Sign-Up</Text>
    </View>
    <ScrollView className="bg-stone-200 p-3 rounded-md">
         <FormField
           title="Full Name"
            value=""
            handleChangeText={() => {}}
            placeholder="Enter your full name"
            formStyles={{ input: { borderRadius: 5, marginBottom: 10 } }}
         />
          <FormField
            title="Email"
            value=""
            keyboardType="email-address"
            handleChangeText={() => {}}
            placeholder="Enter your email"
            formStyles={{ input: { borderRadius: 5, marginBottom: 10 } }}
          />
           <FormField
            title="Phone Number"
            value=""
           handleChangeText={() => {}}
            placeholder="Enter your email"
            formStyles={{ input: { borderRadius: 5, marginBottom: 10 } }}
          />
          <View className="px-4 rounded-md">
          <Text className="text-xl">Location</Text>
          <View className="border-2 rounded-lg">
            <Picker className="">
            <Picker.Item label="Nairobi" value="" />
            <Picker.Item label="Kisumu" value="individual" />
            <Picker.Item label="Mombasa" value="business" />
          </Picker>
          </View>
             </View>
             <FormField
            title="Password"
            value=""
           handleChangeText={() => {}}
            placeholder="Enter your Password"
            formStyles={{ input: { borderRadius: 5, marginBottom: 10 } }}
          />
           <FormField
            title="Confirm Password"
            value=""
           handleChangeText={() => {}}
            placeholder="Enter your Password"
            formStyles={{ input: { borderRadius: 5, marginBottom: 10 } }}
          />
           <CustomButtom
            handlePress={() =>router.push('/home')}
            title="Create Account"
            btnStyles='w-full mt-7 mx-auto bg-green-700'
            textStyles="text-slate-200"
          />
    </ScrollView>
  
    </SafeAreaView>
  )
}

export default AccountForm