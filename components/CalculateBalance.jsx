import { View, Text } from 'react-native';
import React, { useMemo } from 'react';
import UseFetch from '../constants/useFetch';
import { selectCurrentUser } from '../features/auth/authSlice';
import { useSelector } from 'react-redux';

const CalculateBalance = () => {
  const user = useSelector(selectCurrentUser);
  const { data: accounts, loading, error } = UseFetch('https://repay-app.onrender.com/accounts');

  // Filter accounts based on the current user's ID
  const filterAccounts = accounts ? accounts.filter(account => account.user_id === user?.id) : [];

  // Calculate the total balance and format it with commas
  const balance = useMemo(() => {
    if (!filterAccounts.length) {
      return <Text>Loading...</Text>;  
    }

    const total = filterAccounts.reduce((acc, cur) => acc + cur.balance, 0);
    // Format the balance with commas
    return total.toLocaleString(); 
  }, [filterAccounts]);

  // Handle loading and error states
  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
  
      <Text
      style={{textAlign:"center", fontSize:"30px", fontWeight:'bold'}}>{balance}</Text>
    
  );
};

export default CalculateBalance;
