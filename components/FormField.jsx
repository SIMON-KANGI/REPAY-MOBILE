import { View, Text,TextInput  } from 'react-native'
import React from 'react'

const FormField = ({title, value, handleChangeText, placeholder, formStyles}) => {
  return (
    <View>
      <Text className='text-xl font-rbold mx-3'>{title}</Text>
      <View>
        <TextInput
        className='flex-1 text-white p-4 border-2 mx-3 font-semibold text-base'
            style={formStyles.input}
            onChangeText={handleChangeText}
            value={value}
            placeholder={placeholder}
  
        />

        
      </View>
    </View>
  )
}

export default FormField