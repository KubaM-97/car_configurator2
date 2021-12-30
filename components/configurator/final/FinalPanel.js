import React from "react"
import { StyleSheet, View, Image, FlatList } from 'react-native';

import Layer from '~/components/global/Layer'
import FinalPrice from "~/components/configurator/final/FinalPrice";
import { useSelector, useDispatch } from 'react-redux'

export default function FinalPanel() {
    const { selectedItems } = useSelector(state => state.userReducer);

    return (
        <View style={styles.finalPanel}>
            <Layer />
            <FlatList horizontal data={selectedItems} renderItem={({item})=><Image source={item.img} style={{width: 50}} size={10}/>}/>
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
