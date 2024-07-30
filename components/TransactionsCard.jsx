import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const TransactionsCard = ({ amount, receiver, title, date }) => {
  return (
    <TouchableOpacity>
      <View
        style={{
          shadowColor: '#000', // Shadow color (Android)
          shadowOffset: { width: 0, height: 2 }, // Shadow offset (iOS)
          shadowOpacity: 0.1, // Shadow opacity (iOS)
          shadowRadius: 1, // Shadow radius (iOS)
          elevation: 3, // Shadow elevation (Android)
          borderWidth: 1, // Border width
          borderColor: '#d3d3d3', // Border color (Equivalent to border-stone-300)
          borderRadius: 8, // Border radius (Equivalent to rounded-md)
          padding: 12, // Padding
          marginVertical: 8, // Margin for top and bottom (Equivalent to my-2)
          backgroundColor: '#fff', // Background color (Optional for better appearance)
        }}
      >
        <Text>{title}</Text>
        <Text>Amount: <Text style={{ fontWeight: 'bold' }}>{amount}</Text></Text>
        <Text>Receiver: <Text style={{ fontWeight: 'bold' }}>{receiver}</Text> </Text>
        <Text>Date: <Text style={{ fontWeight: 'bold' }}>{date}</Text></Text>
        <Text>Status: Success</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TransactionsCard;
