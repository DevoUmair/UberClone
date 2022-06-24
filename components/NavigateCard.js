import { StyleSheet, Text, View , SafeAreaView , TouchableOpacity} from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete'
import { useUberContext } from '../context/UberContextProvider'
import {useNavigation} from '@react-navigation/native'
import NavFavourite from './NavFavourite'
import { Icon } from 'react-native-elements'

const NavigateCard = () => {

  const { setDestination} = useUberContext();  
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{backgroundColor:'white' , flex:1}}>
        <Text style={tw `text-center py-5 text-xl`}>Good Morning Umair Lafir</Text>
        <View style={tw `border-t border-gray-200 flex-shrink`}>
             <View>
             <GooglePlacesAutocomplete
                 styles={{
                    container:{
                        flex:0,
                        paddingTop:20,
                        backgroundColor:"white"
                    },
                    textInput:{
                        fontSize:18,
                        borderRadius:0,
                        backgroundColor:'#ededed'
                    },
                    textInputContainer:{
                        paddingHorizontal:20,
                        paddingBottom:0
                    }

                 }}
                 onPress={(data, details = null) => {
                    setDestination({
                        location:details.geometry.location,
                        description:data.description
                    })
             
                    navigation.navigate("RideOptionCard")
                }}
                 minLength={2}
                 enableHighAccuracyLocation={false}
                 placeholder='Where to ?' 
                 fetchDetails={true}
                 nearbyPlacesAPI='GooglePlacesSearch'
                 debounce={400}
                 query={{
                    key:'AIzaSyDNE-M0UUuK56EbnL2w_N7SEtIHCOWo-pU',
                    language:'en'
                 }}
              />
             </View>
             <NavFavourite />
             <View style={tw `flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>

                 <TouchableOpacity style={tw `flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}
                   onPress={() => navigation.navigate("RideOptionCard")}
                 >
                    <Icon name='car' type='font-awesome' color='white' size={16}/>
                    <Text style={tw `text-white text-center`}>Ride</Text>
                 </TouchableOpacity>

                 <TouchableOpacity style={tw `flex flex-row justify-between  w-24 px-4 py-3 rounded-full`}>
                    <Icon name='fast-food-outline' type='ionicon' color='black' size={16}/>
                    <Text style={tw `text-center`}>Eats</Text>
                 </TouchableOpacity>

             </View>
        </View>
    </SafeAreaView>
  )
}

export default NavigateCard

const styles = StyleSheet.create({})