import { Link, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import CustomButtom from '../components/CustomButtom';
import { Image } from 'react-native';
import images from '../constants/images';
export default function App() {
  return (
    <SafeAreaProvider>
     <SafeAreaView>
     <ScrollView className="px-3">
    <Text className="text-center text-2xl font-rbold">Welcome to REPAY APP</Text>
   <Image
    source={images.transfer}
     style={{ width: 500, height: 300, alignSelf: 'center' }}
     resizeMode='contain'

   />
       <View className="px-3">
<Text className="text-xl font-rreg">Make all your transaction in one app.</Text>
<Text className="text-xl">Enjoy easy and instant money transactions.Pay your bills faster and secure.</Text>
       </View>
       <CustomButtom
      handlePress={()=>router.push('/login')}
        title="Members Area"
        btnStyles='w-full bg-stone-900 mt-7'
        textStyles="text-slate-200"
      />
        <CustomButtom
      handlePress={()=>router.push('/register')}
        title="Start Now"
        btnStyles='w-full mt-7 border-2 bg-rose-700 border-green-400'
        textStyles="text-stone-200"
      />
    </ScrollView>
     
   </SafeAreaView> 
    </SafeAreaProvider>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
