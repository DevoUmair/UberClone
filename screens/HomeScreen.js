import { StyleSheet, Text, SafeAreaView , View , Image} from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import NavOption from '../components/NavOption'
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete'
import { useUberContext } from '../context/UberContextProvider'
import NavFavourite from '../components/NavFavourite'


const HomeScreen = () => {

  const {setOrigin,setDestination} = useUberContext();  

  return (
    <SafeAreaView style={tw `bg-white h-full`}>
         <View style={tw `p-5`}>
              <Image style={{width:100 , height:100 , resizeMode:'contain'}} source={{uri:'https://links.papareact.com/gzs'}} />

              <GooglePlacesAutocomplete
                 styles={{
                    container:{
                        flex:0,
                    },
                    textInput:{
                        fontSize:18,
                    }
                 }}
                 onPress={(data, details = null) => {
                    setOrigin({
                        location:details.geometry.location,
                        description:data.description
                    })
                    setDestination(null)
                }}
                 minLength={2}
                 enableHighAccuracyLocation={false}
                 placeholder='Where from' 
                 fetchDetails={true}
                 nearbyPlacesAPI='GooglePlacesSearch'
                 debounce={400}
                 query={{
                    key:'AIzaSyDNE-M0UUuK56EbnL2w_N7SEtIHCOWo-pU',
                    language:'en'
                 }}
              />

              <NavOption />
              <NavFavourite />
         </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})