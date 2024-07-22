import { View, Text } from 'react-native'
import {useEffect} from 'react'
import { Stack, SplashScreen } from 'expo-router'
import {useFonts} from 'expo-font'

SplashScreen.preventAutoHideAsync()
const RootLayout = () => {
    const [fontsLoaded, error]= useFonts({
        'Roboto-Thin': require('../assets/fonts/Roboto-Thin.ttf'),
        'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
        'Roboto-Bold': require('../assets/fonts/Roboto-Bold.ttf'),
        'Roboto-Medium': require('../assets/fonts/Roboto-Medium.ttf'),
        'Roboto-Light': require('../assets/fonts/Roboto-Light.ttf'),
    })

    useEffect(()=>{
        if(error) throw error
        fontsLoaded && SplashScreen.hideAsync()
    },[fontsLoaded, error])
  return (
   <Stack>
<Stack.Screen name="index" options={{headerShown:false}} />
<Stack.Screen name="(tabs)" options={{headerShown:false}} />
<Stack.Screen name="(dashboard)" options={{headerShown:false}} />
<Stack.Screen name="(auth)" options={{headerShown:false}} />
   </Stack>
  )
}

export default RootLayout