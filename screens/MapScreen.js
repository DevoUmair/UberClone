import {  View , TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import Map from '../components/Map'
import { createStackNavigator } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'
import NavigateCard from '../components/NavigateCard'
import RideOptionCard from '../components/RideOptionCard'
import { Icon } from 'react-native-elements'

const Stack = createStackNavigator();

const MapScreen = () => {

  const navigation = useNavigation();

  return (
      <View>
          <TouchableOpacity onPress={() => navigation.navigate("HomeScreen") } style={tw `absolute bg-gray-100 z-50 p-3 rounded-full top-8 left-4 shadow-lg`}>
                <Icon name='menu' />
          </TouchableOpacity>
          <View style={tw `h-1/2`}> 
              <Map /> 
          </View>
          <View style={tw `h-1/2`} >
                <Stack.Navigator screenOptions={{headerShown:false}}>
                  <Stack.Screen name='NavigateCard' component={NavigateCard} />
                  <Stack.Screen name='RideOptionCard' component={RideOptionCard} />
                </Stack.Navigator>
          </View>
      </View>
  )
}

export default MapScreen
