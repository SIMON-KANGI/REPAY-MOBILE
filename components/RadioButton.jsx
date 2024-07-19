import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const RadioButton = ({ label, value, selected, description, handlePress }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        backgroundColor: selected ? 'green' : 'transparent',
        width: '100%',
        borderWidth: 1,
        borderColor: selected ? 'green' : 'gray',
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginVertical: 10,
        borderRadius: 10,
        color: selected ?"white":"black"
      }}
    >
      <Text style={{ fontWeight: 'bold', fontSize: 18 }} clasName="font-rbold">{label}</Text>
      <View>
        <Text className="font-rreg">{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RadioButton;
