import React from 'react'
import MapView, { UrlTile } from 'react-native-maps'
import { StyleSheet } from 'react-native'


const MapComponent = () => {
  return (
    <MapView style={styles.map}
      loadingEnabled={true}
      region={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }} >

    </MapView>
  )
}


const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
})

export default MapComponent;