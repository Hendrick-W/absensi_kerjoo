import React from 'react';
import { Text, View } from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
const MapPage = ({
  navigation, route,
}) => {
  const {latitude, longitude} = route.params
  console.log(parseFloat(latitude))
  const initialState = {
    latitude: 	parseFloat(latitude),
    longitude: parseFloat(longitude),
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }

  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={{flex:1}}
      region={initialState}
      >
      <Marker
        coordinate={{
          latitude:initialState.latitude,
          longitude:initialState.longitude
        }}
        title={"I was here"}
      />
    </MapView>
)};

export default MapPage;
