import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import Account from './account'
import Transactions from './transaction'; // Adjust the path as necessary
import Contacts from './contacts'; // Adjust the path as necessary

const DashDrawer = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen 
          name="Account" 
          component={Account} 
          options={{
            drawerLabel: "Account",
          }} 
        />
        <Drawer.Screen 
          name="Transactions" 
          component={Transactions} 
          options={{
            drawerLabel: "Transactions",
          }} 
        />
        <Drawer.Screen 
          name="Contacts" 
          component={Contacts} 
          options={{
            drawerLabel: "Contacts",
          }} 
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default DashDrawer;
