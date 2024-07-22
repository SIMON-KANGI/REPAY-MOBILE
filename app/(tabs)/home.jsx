import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import images from '../../constants/images';
import Card from '../../components/Cards';
import { StatusBar } from 'expo-status-bar';

const Home = () => {
  return (
    <SafeAreaView className="h-full" style={{ backgroundColor: "#0d1b2a" }}>
    <StatusBar backgroundColor='#f2e9e4'/>
      <View>
        <Text className="text-2xl text-rose-600 text-center">Welcome Simon</Text>
      </View>
      <ScrollView className="flex-1">
        <View
          style={{ borderBottomLeftRadius: 15, borderBottomRightRadius: 15, borderColor: '#000', borderWidth: 1, borderTopWidth: 0 }}
          className="p-4 justify-between border-b flex-row items-center">
          <View>
            <Image
              source={images.profile}
              className="w-16 h-16 rounded-full"
            />
          </View>
          <TouchableOpacity>
            <Ionicons name="notifications" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View className="h-full py-4 flex-1" style={{ backgroundColor: "#f2e9e4" }}>
          <View className="border border-stone-300 shadow-md p-4 m-4 rounded-lg">
            <Text className="text-lg text-center font-rregular">My Wallet:</Text>
            <Text className="font-rbold text-center text-3xl">KES 50000</Text>
          </View>
          <View className="flex-row justify-around">
            <TouchableOpacity>
              <View className="items-center">
                <View className="bg-rose-600 rounded-full w-14 h-14">
                  <Image
                    source={images.pay}
                    className="w-12 h-12"
                  />
                </View>
                <Text className="font-rbold">Pay</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View className="items-center">
                <View className="bg-sky-600 items-center justify-center rounded-full w-14 h-14">
                  <MaterialIcons name="arrow-outward" size={32} color="white" />
                </View>
                <Text className="font-rbold">Send</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View className="items-center">
                <View className="rounded-full w-14 h-14 bg-green-500">
                  <Image
                    source={images.withdraw}
                    className="w-12 h-12"
                  />
                </View>
                <Text className="font-rbold">Withdraw</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View className="items-center">
                <View className="items-center justify-center rounded-full w-14 h-14" style={{ backgroundColor: "#540d6e" }}>
                  <FontAwesome5 name="file-invoice-dollar" size={24} color="white" />
                </View>
                <Text className="font-rbold">Invoice</Text>
              </View>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={true} style={styles.horizontalScrollView}>
          <Card image={images.card} title="Without Repay" />
          <Card image={images.online} title="With Repay" />
          <Card image={images.free} title="Repay is Free to use" />
          <Card image={images.bank} title="Bank to Bank transfer" />
        </ScrollView>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={true} style={styles.horizontalScrollView}>
          <Card image={images.manage} title="Manage Expenses" />
          <Card image={images.invoice} title="Send Invoices" />
          <Card image={images.shop} title="Manage your Shop" />
          <Card image={images.repay_card} title="Get Repay Card" />
        </ScrollView>
        </View>
     
         
      
         
      </ScrollView>
    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  horizontalScrollView: {
    paddingVertical: 10,
  },
});

export default Home;
