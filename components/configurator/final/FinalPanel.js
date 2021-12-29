import React from "react"
import { StyleSheet, View } from 'react-native';

import Layer from '~/components/global/Layer'
import FinalPrice from "~/components/configurator/final/FinalPrice";

export default function FinalPanel() {
    return (
        <View style={styles.finalPanel}>
            <Layer />
            <FinalPrice />
        </View>
    )
}

const styles = StyleSheet.create({
    finalPanel: {
        position: 'absolute',
        bottom: 15, 
        width: '95%', 
        height: 100
    }
})
