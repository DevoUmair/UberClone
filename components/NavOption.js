import { View, Text , FlatList , TouchableOpacity  , Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'
import {useNavigation} from '@react-navigation/native'
import { useUberContext } from '../context/UberContextProvider'

const data = [
    {
        id:'123',
        title:'Get a ride',
        image:'https://links.papareact.com/3pn',
        screen:'MapScreen' 
    },
    {
        id:'456',
        title:'Order food',
        image:'https://links.papareact.com/28w',
        screen:'EatsScreen' 
    }
]

const NavOption = () => {

  const navigation = useNavigation();
  const {origin} = useUberContext()

  return (
    <FlatList 
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
               <TouchableOpacity onPress={() => navigation.navigate(item.screen)} style={tw `p-2 pl-6 pb-8 bg-gray-200 m-2 w-40`} disabled={!origin}>
                    <View style={tw `${!origin && "opacity-40"}`}>
                         <Image style={{width:120 , height:120 , resizeMode:'center'}} source={{uri:item.image}} />
                         <Text style={tw `mt-2 text-lg font-semibold`}>{item.title}</Text>
                         <Icon style={tw `p-2 bg-black rounded-full w-10 mt-4`} type='antdesign' color='white' name='arrowright' />
                    </View>
               </TouchableOpacity>
        )}
    />
  )
}

export default NavOption