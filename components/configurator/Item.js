import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { setSelectedItems } from '~/redux/actions'
import { globalStyles } from '~/assets/style';
import { Ionicons } from '@expo/vector-icons';
import Layer from "~/components/global/Layer"


export default function Item(props) {
    const { item } = props;
    const { img, name, price } = item;
    const dispatch = useDispatch()
    const { selectedItems } = useSelector(state => state.userReducer);
    const isSelected = selectedItems.some(el => el?.category === item.category && el?.name === item.name )
    return (
        <TouchableOpacity>
            <Pressable onPress={() => dispatch(setSelectedItems(item))}>
                <View style={[{...styles.item, backgroundColor: isSelected ? '#3264a8' : 'black'}]}>
                    <Layer />
                    <Image source={img} style={styles.itemImage} />
                    <Text style={[globalStyles.text, styles.itemText]}>{name}</Text>
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
        height: '86%',
        marginHorizontal: 7,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center', 
        alignSelf: 'center'
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
