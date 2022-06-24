import { StyleSheet} from 'react-native'
import React,{useRef , useEffect} from 'react'
import MapView, { Marker } from 'react-native-maps'
import tw from 'tailwind-react-native-classnames'
import { useUberContext } from '../context/UberContextProvider'
import MapViewDirections from 'react-native-maps-directions'

const Map = () => {

  const {origin , destination , setTraveTimeInformation} = useUberContext();  
  const mapRef = useRef();

  useEffect(() => {
        if(!origin || !destination) return ;

        mapRef.current.fitToSuppliedMarkers(['origin' , 'destination'] , {
            edgePadding:{top:50, right:50 , bottom:50 , left:50}
        })
  },[origin , destination])

  useEffect(() => {
    if(!origin , !destination) return;      

    const getTravelTime = async () => {
        let url =`https://maps.googleapis.com/maps/api/distancematrix/json?units=kmr&destinations=${destination.description}&origins=${origin.description}&key=AIzaSyDNE-M0UUuK56EbnL2w_N7SEtIHCOWo-pU`

        fetch(url).then((res) => res.json()).then((data) => {
            setTraveTimeInformation(data.rows[0].elements[0])
        }) 
    }

       getTravelTime();
  },[origin, destination])

  const tapLocation = () => {
      
  }
    
  return (

     <MapView 
        ref={mapRef}
        style={tw `flex-1`}
        mapType='standard'
        showsUserLocation={true}
        showsTraffic={true}
        showsIndoors={true}
        loadingEnabled={true}
        // onRegionChange={(Region) => console.log(Region)}
        // onPress={(Region) => console.log(Region.nativeEvent.coordinate)}
        initialRegion={{
            latitude:origin.location.lat,
            longitude:origin.location.lng,
            latitudeDelta:0.005,
            longitudeDelta:0.05,
        }}
     >
   
        {origin && destination && (
             <MapViewDirections 
                 origin={origin.description}
                 destination={destination.description}
                 apikey="AIzaSyDNE-M0UUuK56EbnL2w_N7SEtIHCOWo-pU"
                 strokeWidth={2}
                 strokeColor="black"
             />
        )}
        

        {origin?.location && (
            <Marker 
                coordinate={{
                    latitude:origin.location.lat,
                    longitude:origin.location.lng
                }}
                title="Origin"
                description={origin.description}
                identifier="origin"
                image={require('../assets/icons8-location-100.png')}
            />
        )}

        {destination?.location && (
            <Marker 
                coordinate={{
                    latitude:destination.location.lat,
                    longitude:destination.location.lng
                }}
                title="Destination"
                description={destination.description}
                identifier="destination"
                image={require('../assets/icons8-location-100.png')}
            />
        )}

     </MapView>

  )
}

export default Map

const styles = StyleSheet.create({})