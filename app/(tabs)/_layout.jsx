import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';

const TabIcon = ({ icon, focused, name, color }) => (
  <View style={styles.iconContainer}>
    {icon}
    <Text style={[styles.iconLabel, { color }, focused && styles.focusedLabel]}>
      {name}
    </Text>
  </View>
);

const tabBarOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    backgroundColor: '#161622',
    height: 84,
    justifyContent: 'space-around',
    alignItems: 'center',
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
      name="dashboard"
      options={{
        title: 'Dashboard',
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
    
    <Tabs.Screen
      name="inbox"
      options={{
        title: 'Inbox',
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

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
  },
  iconLabel: {
    fontSize: 12,
    fontWeight: '400',
  },
  focusedLabel: {
    fontWeight: '700',
  },
});

export default TabLayout;
