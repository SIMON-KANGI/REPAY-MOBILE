import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButtom = ({title, handlePress, btnStyles, textStyles}) => {
  return (
    <TouchableOpacity
    onPress={handlePress}
    className={`rounded-xl  min-h-[62px] justify-center items-center ${btnStyles}`}>
     <Text className={`${textStyles} text-xl`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButtom