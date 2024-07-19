import { View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';

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

const TabLayout = () => (
  <Tabs screenOptions={tabBarOptions}>
    <Tabs.Screen
      name="home"
      options={{
        title: 'Home',
        tabBarIcon: ({ color, focused }) => (
          <TabIcon
            icon={<FontAwesome5 name="home" size={24} color={color} />}
            name="Home"
            color={color}
            focused={focused}
          />
        ),
      }}
    />
    
    <Tabs.Screen
      name="about"
      options={{
        title: 'About',
        tabBarIcon: ({ color, focused }) => (
          <TabIcon
            icon={<MaterialIcons name="dashboard" size={24} color={color} />}
            name="About"
            color={color}
            focused={focused}
          />
        ),
      }}
    />
    <Tabs.Screen
      name="profile"
      options={{
        title: 'My Profile',
        tabBarIcon: ({ color, focused }) => (
          <TabIcon
            icon={<MaterialIcons name="person" size={24} color={color} />}
            name="Profile"
            color={color}
            focused={focused}
          />
        ),
      }}
    />
  </Tabs>
);

export default TabLayout;
