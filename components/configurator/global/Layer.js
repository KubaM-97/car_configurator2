import React from 'react'
import { View, StyleSheet } from 'react-native';
export default function Layer() {
    return (
        <View style={styles.layer} />
    )
}

const styles = StyleSheet.create({
    layer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        opacity: .45,
        // padding: inherit,
        // boxSizing: 'border-box',
        
    shadowColor: 'red',
    shadowRadius: 14,
    shadowOffset: {width: 200, height: 200},
    shadowOpacity: 0.75,
    },
});