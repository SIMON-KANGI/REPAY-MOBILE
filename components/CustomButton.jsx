import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({title, handlePress, btnStyles, textStyles}) => {
  return (
    <TouchableOpacity
    onPress={handlePress}
   style={btnStyles}>
     <Text style={{textAlign:"center", color:"white"}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton