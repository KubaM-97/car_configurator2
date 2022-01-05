import React from "react"
import { StyleSheet, View, Image, FlatList } from 'react-native';

import Layer from '~/components/global/Layer'
import FinalPrice from "~/components/configurator/final/FinalPrice";
import { useSelector } from 'react-redux'

export default function FinalPanel() {
    const { selectedItems } = useSelector(state => state.userReducer);

    const renderItem = (item) => item ? <Image source={item.img} style={styles.finalItemsImages} /> : null

    return (
        <View style={styles.finalPanel}>
            <Layer />
            <FlatList keyExtractor={(item, index) => index} horizontal data={selectedItems} renderItem={({item})=> renderItem(item)} contentContainerStyle={styles.finalItems}/>
            <FinalPrice />
        </View>
    )
}

const styles = StyleSheet.create({
    finalPanel: {
        position: 'absolute',
        bottom: 15, 
        width: '95%', 
        height: 100,
    },
    finalItems: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    finalItemsImages: {
        width: 40,
        height: 40,
        marginHorizontal: 3
    }
})
