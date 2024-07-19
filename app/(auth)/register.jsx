import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AccountType from './account/accountType'
import images from '../../constants/images'
const Register = () => {
  return (
    <SafeAreaView>
      <Text className="text-2xl text-center font-rbold">Register Repay</Text>
      <Image
            source={images.transfer}
            style={{ width: 500, height: 300, alignSelf: 'center' }}
            resizeMode='contain'
          />
      <AccountType/>

    </SafeAreaView>
  )
}

export default Register