import { View, Text, ScrollView, Dimensions, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormField from '../../components/FormField';
import CustomButtom from '../../components/CustomButtom';
import images from '../../constants/images';
import { Link, router } from 'expo-router';
const Login = () => {
  return (
    <SafeAreaView className='bg-stone-200 h-full'>
      <ScrollView>
        <View
          className="h-full flex justify-center px-4"
          style={{
            minHeight: Dimensions.get("window").height - 100,
          }}
        >
          <Image
            source={images.transfer}
            style={{ width: 500, height: 300, alignSelf: 'center' }}
            resizeMode='contain'
          />
          <Text className='text-center text-2xl font-rbold'>Login to Account</Text>
          <FormField
            title="Email"
            value=""
            keyboardType="email-address"
            handleChangeText={() => {}}
            placeholder="Enter your email"
            formStyles={{ input: { borderRadius: 10, marginBottom: 10 } }}
          />
          <FormField
            title="Password"
            value=""
            handleChangeText={() => {}}
            placeholder="Enter your password"
            formStyles={{ input: { borderRadius: 10, marginBottom: 10 } }}
          />
          <CustomButtom
            handlePress={() =>router.push('/home')}
            title="Login"
            btnStyles='w-full mt-7 mx-auto bg-black'
            textStyles="text-slate-200"
          />
          <View>
          <Text className='text-center text-sm text-slate-600'>
            Don't have an account? 
          </Text>
          <Link
            className="text-center text-blue-600 font-bold text-sm"
            href="/register"
          >
            Register
          </Link>
        </View>
        </View>  
      
      </ScrollView>
    </SafeAreaView>
  );
}

export default Login;
