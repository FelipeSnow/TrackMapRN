import React from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import MapComponent from '../components/Map';

const HomePage = () => {
    return (
        <View style={styles.container}>
            <MapComponent />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
});

export default HomePage;