import { View, Text } from 'react-native';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../features/auth/authSlice';

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
  const userData = useSelector(selectCurrentUser);
  const [isLoggedIn, setLoggedIn] = useState(!!userData);
  const [user, setUser] = useState(userData);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    try{
       if (userData) {
      setLoggedIn(true);
      setUser(userData);
      setIsLoading(false)
    } else {
      setLoggedIn(false);
      setUser(null);
      setIsLoading(true)
    }
    }catch(err){
      console.log(err)
    }finally{
      setIsLoading(false)
      
      console.log("Error fetching user data")
    }
   
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        isLoggedIn,
        user,
        setLoggedIn,
        setUser,
        isLoading,
      
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
