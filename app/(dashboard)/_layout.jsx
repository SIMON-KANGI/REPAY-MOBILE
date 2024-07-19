import { View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { FontAwesome6,FontAwesome5, MaterialIcons } from '@expo/vector-icons';

const TabIcon = ({ icon, focused, name, color }) => (
  <View className="items-center">
    {icon}
    <Text className={`${focused ? 'font-rbold' : 'font-rregular'} text-xs`} style={{ color }}>
      {name}
    </Text>
  </View>
);

const tabBarOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    backgroundColor: '#161622',
    alignItems: 'center',
    height: 84,
    justifyContent: 'space-around',
  },
  tabBarInactiveTintColor: '#FFE441',
  tabBarActiveTintColor: '#FFA001',
  tabBarIndicatorStyle: { backgroundColor: '#FFA001' },
  tabBarLabelStyle: { fontSize: 12 },
  tabBarIconStyle: { padding: 10 },
};

const DashboardLayout = () => (
  <Tabs screenOptions={tabBarOptions}>
    <Tabs.Screen
      name="account"
      options={{
        title: 'Account',
        tabBarIcon: ({ color, focused }) => (
          <TabIcon
            icon={<MaterialIcons name="account-balance" size={24} color={color} />}
            name="Account"
            color={color}
            focused={focused}
          />
        ),
      }}
    />
    <Tabs.Screen
      name="transaction"
      options={{
        title: 'My Transactions',
        tabBarIcon: ({ color, focused }) => (
          <TabIcon
            icon={<FontAwesome6 name="money-bill-transfer" size={24} color={color} />}
            name="Transact"
            color={color}
            focused={focused}
          />
        ),
      }}
    />
   
     <Tabs.Screen
      name="inbox"
      options={{
        title: 'My Dashboard',
        tabBarIcon: ({ color, focused }) => (
          <TabIcon
            icon={<MaterialIcons name="inbox" size={24} color={color} />}
            name="Inbox"
            color={color}
            focused={focused}
          />
        ),
      }}
    />
    <Tabs.Screen
      name="withdraw"
      options={{
        title: 'My Dashboard',
        tabBarIcon: ({ color, focused }) => (
          <TabIcon
            icon={<FontAwesome5 name="money-bill-wave-alt" size={24} color={color} />}
            name="Withdraw"
            color={color}
            focused={focused}
          />
        ),
      }}
    />
     <Tabs.Screen
      name="dashboard"
      options={{
        title: 'My Dashboard',
        tabBarIcon: ({ color, focused }) => (
          <TabIcon
            icon={<MaterialIcons name="dashboard" size={24} color={color} />}
            name="Dashboard"
            color={color}
            focused={focused}
          />
        ),
      }}
    />
  </Tabs>
);

export default DashboardLayout;
