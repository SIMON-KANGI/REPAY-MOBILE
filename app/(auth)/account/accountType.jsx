import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RadioButton from '../../../components/RadioButton'; // Adjust path as needed
import { useRouter } from 'expo-router'; // Adjust based on your routing setup

const AccountType = () => {
  const [isSelected, setSelected] = useState(null);
  const router = useRouter(); // Hook for navigation

  const handlePress = (value) => {
    setSelected(value);
    router.push('/accountForm'); // Use router.push to navigate to the desired route
  };

  const options = [
    {
      label: 'Individual',
      value: 'Personal',
      description: 'Create an individual account that can manage your personal accounts',
    },
    {
      label: 'Business',
      value: 'Business',
      description: 'Create an account to manage your business transactions. Make invoices to send to your clients. Add products and manage your business accounts and transactions',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Account Type</Text>
      {options.map((option) => (
        <RadioButton
          key={option.value}
          handlePress={() => handlePress(option.value)}
          selected={isSelected === option.value}
          label={option.label}
          value={option.value}
          description={option.description}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
});

export default AccountType;
