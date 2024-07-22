import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialIcons, FontAwesome5, FontAwesome6 } from '@expo/vector-icons';
import images from '../../constants/images';
import Card from '../../components/Cards';
import { StatusBar } from 'expo-status-bar';
import TransactionsCard from '../../components/TransactionsCard';
import { Link } from 'expo-router';

const Dashboard = () => {
  return (
    <SafeAreaView className="h-full" style={{ backgroundColor: "#0d1b2a" }}>
    <StatusBar backgroundColor='#f2e9e4'/>
      <View>
        <Text className="text-2xl text-rose-600 text-center">My Dashboard</Text>
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
          <View className="grid-cols-2  p-3">
            <TouchableOpacity className="border rounded-md p-8 m-3 items-center " style={{backgroundColor:"#1b4332"}}>
              <View className="items-center justify-center">
              <MaterialIcons name="account-balance" size={32} color="#70e000" />
                <Text className="text-xl text-stone-300">Accounts</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity className="border rounded-md m-3 p-8 items-center" style={{backgroundColor:"#1b4332"}}>
              <View className="items-center justify-center">
              <FontAwesome6 name="money-bill-transfer" size={32} color="#70e000" />
                <Text className="text-xl  text-stone-300">Transactions</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity className="border rounded-md p-8 m-3 items-center " style={{backgroundColor:"#1b4332"}}>
              <View className="items-center justify-center">
              <FontAwesome5 name="file-invoice-dollar" size={32} color="#70e000" />
                <Text className="text-xl text-stone-300">Invoices</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity className="border rounded-md m-3 p-8 items-center" style={{backgroundColor:"#1b4332"}}>
              <View className="items-center justify-center">
              <MaterialIcons name="production-quantity-limits" size={32} color="#70e000" />
                <Text className="text-xl  text-stone-300">Products</Text>
              </View>
            </TouchableOpacity>
          </View>
     <View className="p-3">
      <Text className="text-center text-2xl font-rbold">Recent Transactions</Text>
      <TransactionsCard
        title="Transaction 1"
        amount="KES 5000"
        receiver="Simon Mwangi"
        date="12-01-2022"
        status="Success"
      />
       <TransactionsCard
        title="Transaction 2"
        amount="KES 5000"
        receiver="Simon Mwangi"
        date="12-01-2022"
        status="Success"
      />
       <TransactionsCard
        title="Transaction 2"
        amount="KES 5000"
        receiver="Simon Mwangi"
        date="12-01-2022"
        status="Success"
      />
      <Link href="/home" className='text-rose-500 text-lg'>View More</Link>
     </View>
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

export default Dashboard;
