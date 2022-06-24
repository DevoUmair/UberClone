import {KeyboardAvoidingView, Platform} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import {Provider} from 'react-redux'
import HomeScreen from './screens/HomeScreen';
import { store } from './store';
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import MapScreen from './screens/MapScreen';
import UberContextProvider from './context/UberContextProvider';

const Stack = createStackNavigator();

export default function App() {

  return (
    <UberContextProvider>
        <NavigationContainer>
            <SafeAreaProvider>
               <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{flex:1}}>
                  <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{headerShown:false}}>
                      <Stack.Screen name='HomeScreen' component={HomeScreen}/>
                      <Stack.Screen name='MapScreen' component={MapScreen}/>
                  </Stack.Navigator>
               </KeyboardAvoidingView>
                  <StatusBar />
            </SafeAreaProvider>
        </NavigationContainer>
    </UberContextProvider>
  );
}


