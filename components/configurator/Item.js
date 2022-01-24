import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { setSelectedItems, setSelectedMultiItems } from '~/redux/actions'
import { globalStyles } from '~/assets/style';
import { Ionicons } from '@expo/vector-icons';
import Layer from "~/components/global/Layer"
import I18n from '~/lang/i18n';

export default function Item(props) {
    const { item } = props;
    const { img, name, price } = item;
    const { selectedItems } = useSelector(state => state.userReducer);
    const isSelected = selectedItems.some(el => el?.category === item.category && el?.name === item.name )
    
    const dispatch = useDispatch()
    // const setItems = () =>  dispatch(item.multi ? setSelectedMultiItems(item) : setSelectedItems(item))
    const setItems = () =>  dispatch(item.multi ? setSelectedItems(item) : setSelectedItems(item))

    return (
        <TouchableOpacity style={styles.item}>
            <Pressable onPress={setItems}>
                <View style={ {backgroundColor: isSelected ? '#3264a8' : 'black'}}>
                    <Layer />
                    <Image source={img} style={styles.itemImage} />
                    <Text style={[globalStyles.text, styles.itemText]}>{I18n.t(name)}</Text>
                    <Text style={[globalStyles.text, styles.itemText]}> 
                        <Ionicons name="logo-euro" size={9} color="lightblue"/> {price}
                    </Text>
                </View>
            </Pressable>
        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    item: {
        marginHorizontal: 7,
        alignItems: 'center', 
    },
    itemText: {
        fontSize: 14,
    },
    itemImage: {
        width: 100,
        height: 100,
        margin: 10,
    }
})
