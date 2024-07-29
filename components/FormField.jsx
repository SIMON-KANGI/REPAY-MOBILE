import { View, Text, TextInput } from 'react-native';
import React from 'react';

const FormField = ({ title, value, handleChangeText, placeholder, formStyles = {} }) => {
  return (
    <View style={formStyles.container || { marginBottom: 15 }}>
      <Text style={[{ fontSize: 20, fontWeight: '500', marginHorizontal: 12 }, formStyles.label]}>
        {title}
      </Text>
      <View style={formStyles.inputContainer || { marginTop: 5 }}>
        <TextInput
          style={[
            {
              borderRadius: 10,
              borderWidth: 1,
              borderColor: 'black',
              paddingHorizontal: 10,
              paddingVertical: 8,
              fontSize: 16,
            },
            formStyles.input,
          ]}
          onChangeText={handleChangeText}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={formStyles.placeholderColor || '#888'}
          autoCapitalize="none" // Example of an additional prop
        />
      </View>
    </View>
  );
};

export default FormField;
