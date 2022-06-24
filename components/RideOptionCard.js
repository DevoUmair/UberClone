import {  Text, View , SafeAreaView , TouchableOpacity ,FlatList, Image } from 'react-native'
import React , {useState} from 'react'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'
import {useNavigation} from '@react-navigation/native'
import { useUberContext } from '../context/UberContextProvider'

const data = [
   {
     id:"Bike123",
     title:"Bike",
     multiplier:1,
     image:"https://media.istockphoto.com/photos/yellow-motorcycle-delivery-box-picture-id516426528"
   },
   {
     id:"Car123",
     title:"Car",
     multiplier:1.6,
     image:"https://links.papareact.com/7pf"
   },
   {
     id:"Van123",
     title:"Van",
     multiplier:2.2,
     image:"https://links.papareact.com/5w8"
   },
]

const TRVEL_CHARGE_RATE = 3


const RideOptionCard = () => {
  const {trveltimeinformation} = useUberContext()  
  const navigation = useNavigation();  
  const [selected , setSelected] = useState(null);
    
  return (
    <SafeAreaView style={tw `bg-white flex-grow`}>
        <View>
            <TouchableOpacity style={tw `absolute top-1 left-5 p-3 rounded-full z-50`} onPress={() => navigation.navigate("NavigateCard") }>
                <Icon size={40} name='chevron-left' type='fontawesome' />
            </TouchableOpacity>
           <Text style={tw `text-center py-5 text-xl`}>Select a Ride - {trveltimeinformation?.distance?.text}</Text>
        </View>
        <View>
            <TouchableOpacity disabled={!selected} style={tw `bg-black py-3 m-3 ${!selected && "bg-gray-200"}`}>
                <Text style={tw `text-center text-white text-xl`}>Choose  {selected?.title}</Text>
            </TouchableOpacity>
        </View>
        <FlatList 
            style={{marginBottom:150}}
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
                <TouchableOpacity style={tw `flex-row justify-between items-center px-2 ${item.id === selected?.id && "bg-gray-200" }`}
                  onPress={() => setSelected(item)}
                >
                    <Image style={{width:100 , height:100 , resizeMode:"contain"}} source={{uri:item.image}} />
                    <View style={tw ` mr-1`} >
                        <Text style={tw `text-xl font-semibold`}>{item.title}</Text>
                        <Text>{trveltimeinformation?.duration?.text} Travel Time</Text>
                    </View>
                    <Text style={{fontSize:17}} >

                       {
                        new Intl.NumberFormat('en-gb' , {
                            style:'currency',
                            currency:'LKR'
                        }).format(
                            ( (trveltimeinformation?.duration?.value * TRVEL_CHARGE_RATE ) / 10 ) * item.multiplier
                        )
                       }

                    </Text>
                </TouchableOpacity>
            )}
        />
          
    </SafeAreaView>
  )
}

export default RideOptionCard

